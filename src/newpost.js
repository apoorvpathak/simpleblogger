const fs = require('fs-extra');
const path = require('path')

function newPost(title) {
    const postsMdPath = path.join(process.cwd(), 'blog', 'posts', 'posts-md');
    const createDate = new Date().toISOString().split('T')[0]
    const postData = `---
title: ${title}
date: ${createDate}
---
`;
    const fileName = title.toLowerCase().replace(/ /g,'-') + '.md';
    const filePath = path.join(postsMdPath, fileName);
    if(fs.existsSync(filePath)){
        console.log(`A file with the name of "${title}" already exists.`)
        return;
    }
    fs.writeFileSync(path.join(filePath), postData)
    console.log("Post created successfully!")
}

module.exports = newPost;