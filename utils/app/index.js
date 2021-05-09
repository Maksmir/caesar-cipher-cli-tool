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
const check = (inputData, args, outputSource) => {
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
};

const main = (args) => {
  const inputSource = checkArg(args, "input");
  const outputSource = checkArg(args, "output");

  if (inputSource === "file") {
    const inputData = file.read(args.input);
    check(inputData, args, outputSource);
    process.exit(0);
  } else {
    while (true) {
      const inputData = cons.readLine();
      check(inputData, args, outputSource);
    }
  }
};

module.exports.main = main;
