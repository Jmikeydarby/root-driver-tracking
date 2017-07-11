// fs is a file system module built into node
const fs = require('fs');

const readFiles = (files) => {
  let dataArray = [];
  for(let i = 0; i < files.length; i++) {
    let val = files[i];
    try {
      let data = fs.readFileSync(val, "utf8");
      dataArray[i] = fileDS(val, data, null);
    } catch (err) {
      dataArray[i] = fileDS(val, null, err);
    }

  }
  return dataArray;

}

function fileDS(loc, data, err) {
  return {
    loc: loc,
    data: data,
    err: err
  }
}

module.exports = readFiles;
