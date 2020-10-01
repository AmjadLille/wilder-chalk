const chalk = require("chalk");
const amie = ["Timothée", "Sarah", "Thomas", "Nordine"];

console.log(chalk.blue(amie[0]), chalk.blue.bgRed.bold(amie[1]), chalk.blue.underline.red(amie[2]), chalk.greenBright(amie[3]));
