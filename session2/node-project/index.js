#!/usr/bin/env node

const { program } = require("commander");
const { translate } = require("@vitalets/google-translate-api");

program
  .name("translate")
  .usage("[text] [options]")
  .option("-f, --from <lang>", "source language code (default: auto)")
  .option("-t, --to <lang>", "target language code (default: en)");

program.parse(process.argv);

const options = program.opts();

const text = program.args.join(" ");
const from = options.from || "auto";
const to = options.to || "en";

if (!text) {
  program.outputHelp();
  process.exit(1);
}

translate(text, { from, to })
  .then((res) => {
    console.log(res.text);
  })
  .catch((err) => {
    console.error(err.message);
  });
