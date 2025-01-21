const fs = require('fs-extra');
const path = require('path')

function newPost() {
    const postsMdPath = path.join(process.cwd(), 'blog', 'posts', 'posts-md');
    const createDate = new Date().toISOString().split('T')[0]
    const postData = `---
title: My Blog Post
date: ${createDate}
---
`;

    fs.writeFileSync(path.join(postsMdPath, 'my-blog-posts.md'), postData)
    console.log("Post created successfully!")
}

module.exports = newPost;