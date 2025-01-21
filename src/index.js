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
    .command('create-post')
    .description('Generate new Md blog post as template')
    .action(()=>{
        newPost()
    })

program.parse(process.argv);