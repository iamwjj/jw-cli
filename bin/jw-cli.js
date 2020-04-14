#!/usr/bin/env node
const program = require('commander')

program.version('0.1.0', '-v, --version', '当前CLI版本号')

program
  .command('init <name>')
  .description('初始化一个项目')
  .action((name) => {
    console.log('创建一个项目：' + name)
  })

program.parse(process.argv)