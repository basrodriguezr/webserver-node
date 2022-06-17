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
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//handlebars
hbs.registerPartials(__dirname + '/views/partials/', function (err) {});
app.set('view engine', 'hbs');

//middleware: funcion que se ejecuta antes de hacer otra cosa
app.use(express.static('public'));

app.get('/',  (req, res) => {
  res.render('home',{
      nombre: 'Bass',
      titulo: 'Curso de node'
  });
});

app.get('/elements',  (req, res) => {
    //res.send('Hello World');
    res.render('elements',{
        nombre: 'Bass',
        titulo: 'Curso de node - Elements'
    });
});

app.get('/generic',  (req, res) => {
    //res.send('Hello World');
    res.render('generic',{
        nombre: 'Bass',
        titulo: 'Curso de node - Generic'
    });
});

app.get('/*',  (req, res) => {
    res.render('404',{
        nombre: 'Bass',
        titulo: '404 NOT FOUND - ERROR'
    });
});

app.listen(port, ()=> {
    console.log(`Listening at http://localhost:${port}`)
});

