const fs = require('fs-extra');
const path = require('path')

function initializeBlog(){
	const blogPath = path.join(process.cwd(),'blog');
	const postsPath = path.join(blogPath,'posts'); 
	const postsMdPath = path.join(postsPath,'posts-md');
	const postsHtmlPath = path.join(postsPath, 'posts-html');
	
	fs.ensureDirSync(blogPath);
	fs.ensureDirSync(postsPath);
	fs.ensureDirSync(postsMdPath);
	fs.ensureDirSync(postsHtmlPath);

    const indexHtmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Blog</title>
    </head>
    <body>
        <h1>Welcome to My Blog</h1>
        <div id="posts"></div>
    </body>
    <script src='blog.js'></script>
    </html>
    `
    fs.writeFileSync(path.join(blogPath, 'index.html'), indexHtmlContent);
    fs.writeFileSync(path.join(postsPath, 'posts.json'), JSON.stringify([], null, 2));
    console.log('Blog initialized successfully!');
}
initializeBlog();