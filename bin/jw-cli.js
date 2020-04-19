#!/usr/bin/env node
const program = require('commander')
const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')
const inquirer = require('inquirer')

const spinner = ora('正在拉取模板...')

program.version('0.1.0', '-v, --version', '当前CLI版本号')

program
  .command('init <name>')
  .description('初始化一个项目')
  .action((name) => {
    inquirer.prompt([{
      type: 'list',
      name: 'projectType',
      message: '你需要创建什么项目？',
      choices: ['Vue', 'React', '多页面']
    }]).then(({ projectType }) => {
      let tplUrl = ''
      if(projectType === 'Vue') {
        tplUrl = 'iamwjj/vue-template'
      } else if(projectType === 'React') {
        tplUrl = 'iamwjj/react-template'
      } else {
        tplUrl = 'iamwjj/multiple-page-template'
      }
      spinner.start()
      download(tplUrl, name, { clone: true }, (err) => {
        spinner.stop()
        if(!err) {
          console.log('成功创建' + projectType + '项目 ' + chalk.yellow(name))
        } else {
          console.log(err)
        }
      })
    })
  })

program.parse(process.argv)