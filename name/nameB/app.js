const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('./index.html', 'binary', (err, data) => {
      if (err) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(err);
        res.end();
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
      }
    })
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('hello node');
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});