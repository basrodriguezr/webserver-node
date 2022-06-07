// const http = require('http');

// http.createServer((request,response) => {
//     // console.log(request);

//     // response.writeHead(200, {'Content-Type: application/json'});

//     // const persona = {
//     //     id: 1,
//     //     nomnbre: 'Luffy'
//     // };

//     // response.write(JSON.stringify(persona));
//     response.write('Hola Mundo');
//     response.end();
// })
// .listen(8080);

// console.log('Escuchando el puerto', 8080);

const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'hbs');

//middleware: funcion que se ejecuta antes de hacer otra cosa
app.use(express.static('public'));


app.get('/',  (req, res) => {
  res.render('home');
});

app.get('/elements',  (req, res) => {
    //res.send('Hello World');
    res.sendFile(__dirname + '/public/elements.html');
});

app.get('/generic',  (req, res) => {
    //res.send('Hello World');
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('*',  (req, res) => {
    //res.writeHead(404);
    // res.send('404 | Page not found');
    res.sendFile(__dirname + '/public/404.html');
    res.se
  
});

app.listen(port, ()=> {
    console.log(`Escuchando el puerto ${port}`)
});

