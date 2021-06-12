var http = require("http");
var foo = 

http.createServer(function (req, res){
    res.end("Helo Node");
}).listen(8080);

console.log("server is running on localhost:8080")
