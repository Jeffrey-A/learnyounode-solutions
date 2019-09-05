const http = require("http");
const fs = require("fs");
const port = process.argv[2];
const file = process.argv[3];

if (port && file) {
  const server = http.createServer(function(req, res) {
    const readStream = fs.createReadStream(file);
    readStream.on('open', () => {
        readStream.pipe(res);
    })

    readStream.on('error', (e) => {
        res.end("error");
    })
  });
  
  server.listen(port);
} else {
    console.log("nope")
}
