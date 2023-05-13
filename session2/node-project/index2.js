const { program } = require("commander");

program.option("-f").option("-t");
program.parse(process.argv);

const options = program.opts();
console.log({ options });
