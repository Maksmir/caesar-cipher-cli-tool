const cipher = (data, shift) => {
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    let charCode = data.charCodeAt(i);
    if (charCode > 64 && charCode < 91) {
      charCode += shift;
      shift > 0
        ? newData.push(charCode < 91 ? charCode : (charCode - 91 + 65))
        : newData.push(charCode > 64 ? charCode : (90 - 64 + charCode));
    } else if (charCode > 96 && charCode < 123) {
      charCode += shift;
      shift > 0
        ? newData.push(charCode < 123 ? charCode : (charCode - 123 + 97))
        : newData.push(charCode > 96 ? charCode : (122 - 96 + charCode));
    } else {
      newData.push(charCode);
    }
  }
  return String.fromCharCode.apply(null, newData);
};

const caesar = (data, shift, action) => {
  if (action === "encode" || action === "decode") {
    return cipher(data, action === "encode" ? shift : -shift); 
  } else return "Unknown action";
};

module.exports.caesar = caesar;
