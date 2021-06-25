const chalk = require('chalk')
const path = require('path')

console.log(chalk.cyan('Название файла: ', path.basename(__filename)))

console.log(chalk.red('Имя директории: ', path.dirname(__filename)))

console.log(chalk.yellow('Расширение файла: ', path.extname(__filename)))

console.log(chalk.green('Parse: ', path.parse(__filename).name))

console.log(chalk.blueBright(path.join(__dirname, 'server', 'index.html')))