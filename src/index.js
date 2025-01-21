const {program} = require('commander');
const build = require('./build');

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

program.parse(process.argv);