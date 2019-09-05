const http = require('http');
const port = process.argv[2];
const map = require('through2-map')  

if(port){
    const server = http.createServer((req, res) => {
        
       if(req.method === "POST"){
           req.pipe(map(function (chunk) {  
              return chunk.toString().toUpperCase()  
            })).pipe(res) 
       }
    })

    server.listen(port);
}