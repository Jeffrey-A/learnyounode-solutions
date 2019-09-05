const fs = require("fs");
const path = require("path");

function filterFiles(dir, ext, callback) {
  const modExt = "." + ext;
  const listOfFiles = [];
  fs.readdir(dir, (err, data) => {
    if (err) {
      callback(err);
    } else {
      data.forEach(file => {
        if (path.extname(dir + file) === modExt) {
          listOfFiles.push(file);
        }
      });

      callback(null, listOfFiles);
    }
  });
}

module.exports = filterFiles;
