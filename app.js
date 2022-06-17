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

const app = express();
const port = 8080;

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

// app.get('/',  (req, res) => {
//     res.render('home');
// });

// app.get('/',  (req, res) => { res.send("Hola Mundo")});

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

app.get('*',  (req, res) => {
    //res.writeHead(404);
    // res.send('404 | Page not found');
    res.sendFile(__dirname + '/public/404.html');
  
});

app.listen(port, ()=> {
    console.log(`Escuchando el puerto ${port}`)
});

