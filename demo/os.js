const os = require('os');

console.log("Operation System: ", os.platform());
console.log("Arch proc: ", os.arch());
console.log("Info proc: ", os.cpus());
console.log("Свободная память: ", os.freemem());
console.log("Всего памяти:     ", os.totalmem());
console.log("Домашняя директория: ", os.homedir());
console.log("Включен: ", os.uptime());