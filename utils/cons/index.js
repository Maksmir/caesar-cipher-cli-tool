const readlineSync = require("readline-sync");
let num = 0;

const readLine = () => {
  num++;
  return readlineSync.question(num > 1 ? "Continue (Use Ctrl+c to stop): " : "Write string: ");
};

module.exports.readLine = readLine;
