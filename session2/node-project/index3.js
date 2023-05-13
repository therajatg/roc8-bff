const { program } = require("commander");

program.option("-f, --from <from-lang>").option("-t, --target <target-lang>");
program.parse(process.argv);

const options = program.opts();
console.log({ options });
