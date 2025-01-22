const fs = require('fs-extra');
const path = require('path');
const marked = require('marked');
const matter = require('front-matter');
const cheerio = require('cheerio')

function indexPageGenerator(posts, blogIndexPath){
    const indexHtmlFile = fs.readFileSync(blogIndexPath, 'utf-8');

    const $ = cheerio.load(indexHtmlFile);
    $('#posts').empty();

    posts.forEach((post)=>{
        $('#posts').append(`
            <div class="post">
                <h2><a href="/blog/posts/posts-html/${post.file}">${post.title}</a></h2>
                <p class="date">${post.date.split("T")[0]}</p>
            </div>
        `);
    });
    fs.writeFileSync(blogIndexPath, $.html());
};

function build(){
    const postsMdPath = path.join(process.cwd(), 'blog','posts','posts-md');
    const postsHtmlPath = path.join(process.cwd(), 'blog', 'posts', 'posts-html');
    const postsJsonPath = path.join(process.cwd(), 'blog', 'posts', 'posts.json');
    const blogIndexPath = path.join(process.cwd(), 'blog', 'index.html');

    const mdFiles = fs.readdirSync(postsMdPath).filter(file => file.endsWith('.md'));

    let posts = [];

    mdFiles.forEach((file, index) =>{
        const filePath = path.join(postsMdPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        const { attributes, body } = matter(fileContent);
        const htmlContent = marked.parse(body);

        const htmlFileName = file.replace('.md', '.html');
        fs.writeFileSync(path.join(postsHtmlPath, htmlFileName), htmlContent);

        posts.push({
            id: index,
            title: attributes.title || 'Untitled',
            date: typeof attributes.date === 'string' 
            ? attributes.date.split('T')[0]
            : new Date().toISOString().split('T')[0],
            file: htmlFileName,
          });
    });
    fs.writeFileSync(postsJsonPath, JSON.stringify(posts, null, 2));

    indexPageGenerator(posts, blogIndexPath)

    console.log('Blog built successfully!');
}

module.exports = build;