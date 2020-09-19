const inquirer = require('inquirer')

const team = ['埼玉西部', '福岡ソフトバンク', '東北楽天', '千葉ロッテ', '北海道日本ハム', 'オリックス', '読売', '横浜DeNA', '阪神', '広島東洋', '中日', '東京ヤクルト']
const position = ['投手', '捕手', '内野手', '外野手']

const sleep = (sec) => {
  return new Promise(resolve => {
    setTimeout(resolve, sec * 1000)
  })
}

const exec = () => {
  inquirer.prompt([
    {
      name: 'playerName',
      message: '氏名を入力してください：',
      default: '山田 太郎'
    },
    {
      name: 'almaMater',
      message: '出身校or所属チームを入力してください',
      default: '明訓高校'
    },
    {
      type: 'list',
      name: 'position',
      message: 'ポジションを選択してください',
      choices: position
    }
  ])
    .then(async answers => {
      await sleep(1)
      const round = Math.floor(Math.random() * Math.floor(7)) + 1
      console.log('第' + round + '巡選択希望選手')
      return answers
    })
    .then(async answers => {
      await sleep(2)
      const nominationTeam = team[Math.floor(Math.random() * team.length)]
      console.log(nominationTeam)
      return answers
    })
    .then(async answers => {
      await sleep(3)
      console.info('\n' + answers.playerName)
      console.info(answers.position)
      console.info(answers.almaMater)
    })
}

exec()
