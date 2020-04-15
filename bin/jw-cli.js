#!/usr/bin/env node
const program = require('commander')
const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')

const spinner = ora('正在拉取模板...')

program.version('0.1.0', '-v, --version', '当前CLI版本号')

program
  .command('init <name>')
  .description('初始化一个项目')
  .action((name) => {
    spinner.start()
    download('iamwjj/vue-template', name, { clone: true }, (err) => {
      spinner.stop()
      if(!err) {
        console.log('成功创建项目 ' + chalk.yellow(name))
      } else {
        console.log(err)
      }
    })
  })

program.parse(process.argv)