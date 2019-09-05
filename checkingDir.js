const fs = require("fs");
const path = require("path");

const dir = process.argv[2];
const extension = "." + process.argv[3];
const listOfFiles = [];

fs.readdir(dir, (err, data) => {
  data.forEach(file => {
    if (path.extname(dir + file) === extension) {
      listOfFiles.push(file);
    }
  });

   console.log(listOfFiles.join("\n"));
});
