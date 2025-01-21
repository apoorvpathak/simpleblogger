const fs = require('fs-extra');
const path = require('path');
const marked = require('marked');
const matter = require('front-matter');

function build(){
    const postsMdPath = path.join(process.cwd(), 'blog','posts','posts-md');
    const postsHtmlPath = path.join(process.cwd(), 'blog', 'posts', 'posts-html');
    const postsJsonPath = path.join(process.cwd(), 'blog', 'posts', 'posts.json');

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
            date: attributes.date || new Date().toISOString(),
            file: htmlFileName,
          });
    });
    fs.writeFileSync(postsJsonPath, JSON.stringify(posts, null, 2));

    console.log('Blog built successfully!');
}

build();