const net = require("net");
const port = process.argv[2];

const padZeros = input => (input <= 9 ? "0" + input : input);

const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let minutes = date.getMinutes();
  let hours = date.getHours();

  day = padZeros(day);
  month = padZeros(month);
  hours = padZeros(hours);
  minutes = padZeros(minutes);

  return `${year}-${month}-${day} ${hours}:${minutes}\n`;
};

if (port) {
  const server = net.createServer(socket => {
    socket.end(getDate());
  });

  server.listen(port);
}
