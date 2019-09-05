const fs = require('fs');
const filePath = process.argv[2];
const data = fs.readFileSync(filePath, 'utf8')
console.log(data.split('\n').length -1 );