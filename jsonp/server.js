const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // req.query.callback
  var callbackName = 'test';
  res.write(callbackName+"({'haha': 'hello world from JSONP!'});");
  // test({'haha': 'hello world from JSONP!'})
  // 一个带参数的执行函数
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});