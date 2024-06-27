var http = require("http");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Bienvenidos al servidor web");
    response.end();
}).listen(8888);

console.log("Servidor ejecutándose en http://localhost:8888/");
