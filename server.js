const express = require('express'); 
const { engine } = require('express-handlebars'); 

const app = express(); // creo la app de express

app.engine('hbs',engine({  // config engine
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`
}))


//set aplication
app.set('views','./views'); // vistas
app.set('view engine', 'hbs');// motor a utilizar



app. use('public' , express.static('public')); // carpeta publica

app.get('/', (req,res)=> 
{
    return res. render('layouts/main') // archivo y variables a renderizar
})

app.get('/productos', (req,res)=> // end point donde retorna la data
{
    const input = 
    {
        productos :
        [
            {
              id: 1,
              title: "Escuadra",
              price: 123.45,
              thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
            },
            {
              id: 2,
              title: "Calculadora",
              price: 234.56,
              thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
            },
            {
              id: 3,
              title: "Globo Terráqueo",
              price: 345.67,
              thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
            }
           ]
    }
    
    return res. render('layouts/productos',input) // archivo y variables a renderizar
})

const PORT = 8080; // variable para el puerto

const server = app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))

server.on('error', err => console.log(`Error en servidor: ${err}`))