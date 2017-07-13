// fs is a file system module built into node
const fs = require('fs');

const readFiles = (files) => {
  let dataArray = [];
  for(let i = 0; i < files.length; i++) {
    let val = files[i];
    try {
      let data = fs.readFileSync(val, "utf8");
      dataArray[i] = fileDS(val, data, null);
    } catch (fileNotFoundErr) {
      dataArray[i] = fileDS(val, null, fileNotFoundErr);
    }

  }
  return dataArray;

}

function fileDS(loc, data, fileNotFoundErr) {
  return {
    loc: loc,
    data: data,
    fileNotFoundErr: fileNotFoundErr
  }
}

module.exports = readFiles;
