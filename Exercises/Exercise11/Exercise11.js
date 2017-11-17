var http = require('http');
var value = require('fs');

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  value.createReadStream(process.argv[3]).pipe(res);
});

server.listen(Number(process.argv[2]));