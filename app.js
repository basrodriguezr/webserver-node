const http = require('http');

http.createServer((request,response) => {
    response.write('Hola Mundo');
    response.end();
})
.listen(8080);

console.log('Escuchando el puerto', 8080);

