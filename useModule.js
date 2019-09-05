const filterFiles = require("./useModuleHelper");
const dir = process.argv[2];
const extension = process.argv[3];

filterFiles(dir, extension, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.join("\n"));
  }
});
