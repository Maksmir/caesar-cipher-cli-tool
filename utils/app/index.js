const file = require("../file");
const caesar = require("../caesar");
const cons = require("../cons");

const checkArg = (args, type) => {
  if (args[type]) {
    const check = file.check(args[type], type);
    if (check != true) {
      console.error(check);
      process.exit(1);
    }
  } else {
    return "console";
  }
  return "file";
};

const main = (args) => {
    const inputSource = checkArg(args, "input");
    const outputSource = checkArg(args, "output");

    const inputData = inputSource === "file" ? file.read(args.input) : cons.readLine();
    const outputData = caesar.caesar(
        inputData,
        Number(args.shift),
        args.action
    );
    if (outputSource === "file") {
        file.appendTo(args.output, outputData);
    } else {
        console.log(outputData);
    }
    if (inputSource === "file") process.exit(0);
};

module.exports.main = main;
