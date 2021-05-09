const fs = require("fs");

const check = (path, type) => {
  try {
    if (fs.existsSync(path) && !fs.lstatSync(path).isDirectory()) {
      switch (type) {
        case "input":
          return (fs.accessSync(path), fs.R_OK)
            ? true
            : `No read access to ${type} file`;
        case "output":
          return (fs.accessSync(path), fs.W_OK)
            ? true
            : `No write access to ${type} file`;
        default:
          return "Unknown file type";
      }
    } else {
      return `Wrong ${type} file path`;
    }
  } catch (err) {
    return "Unknown error";
  }
};

const read = (name) => {
  try {
    return fs.readFileSync(name, "utf8");
  } catch (err) {
    return "Unknown error";
  }
};

const appendTo = (name, data) => {
  try {
    fs.appendFileSync(name, data);
  } catch (err) {
    return "Unknown error";
  }
};

module.exports.check = check;
module.exports.read = read;
module.exports.appendTo = appendTo;
