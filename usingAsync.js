const http = require("http");
const urls = process.argv.slice(2);

const fetchData = (url, callback) => {
  let allData = "";

  http.get(url, res => {

    res.setEncoding("utf8");

    res.on("data", chunk => {
      allData += chunk;
    });

    res.on('end', () => {
        callback(allData)
     })
    
  });
};

const main = async () => {
    for ( let i=0; i< urls.length; i++){
        await fetchData(urls[i], console.log);
    }
};

main();
