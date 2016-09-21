var http = require('http')

var server = http.createServer(function (req, res) {
  console.log(req.url)
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
