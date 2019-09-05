const http = require("http");
const url = require("url");
const port = process.argv[2];

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url);
  const isoFormat = urlInfo.search.split("=")[1];

  if (req.method === "GET" && urlInfo.pathname === "/api/parsetime") {

    const date = new Date(isoFormat);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    res.writeHead(200, { 'Content-Type': 'application/json' }) 
    res.end(`{"hour":${hours}, "minute":${minutes}, "second":${seconds}}`);
  }

  if (req.method === "GET" && urlInfo.pathname === "/api/unixtime") {
      res.writeHead(200, { 'Content-Type': 'application/json' }) 
      res.end(`{"unixtime":${Date.parse(isoFormat)}}`)
  }
});

server.listen(port);
