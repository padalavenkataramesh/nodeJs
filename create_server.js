var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('My project test\n');
}).listen(1234, 'localhost');
console.log('Server running at http://127.0.0.1:1234/');