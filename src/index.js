#!/usr/bin/env node

const {program} = require('commander');
const init = require('./init');
const build = require('./build');
const newPost = require('./newpost');

program
    .command('init')
    .description('Initialize the blog structure')
    .action(()=>{
        init();
    });

program
    .command('build')
    .description('Build the blog from md files')
    .action(()=>{
        build();
    });

program
    .command('create-post <title>')
    .description('Generate new Md blog post as template')
    .action((title)=>{
        newPost(title)
    })

program.parse(process.argv);