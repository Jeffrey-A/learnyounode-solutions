const http = require('http');
let allData = "";
const url = process.argv[2];

http.get(url, (res) => {
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
        allData += chunk;
    })

    res.on('end', () => {
        console.log(allData.length)
        console.log(allData)
    })
})