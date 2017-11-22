const http = require('http');
const io = require('socket.io');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {});

io(server).on('connection', function (client) {
  client.emit('websocketData', 'websock line');
})

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});