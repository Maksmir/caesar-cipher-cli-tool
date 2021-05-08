const { program } = require("commander");

program.storeOptionsAsProperties(false);
program
    .requiredOption("-s, --shift <shift>", "a shift")
    .option("-i, --input [file]", "an input file")
    .option("-o, --output [file]", "an output file")
    .requiredOption("-a, --action <type>", "encode/decode");
