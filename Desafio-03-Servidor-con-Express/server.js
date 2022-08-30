const express = require('express')

const app = express();

const server = app.listen(8080, () => {
    console.log('Server Up!');
})

server.on('error', error => console.log(`Error en servidor ${error}`))

app.get('/', (request, response) => {
    response.send('<h1 style= "text-align: center">Desafío 2</h1>')
})

// Productos
const products = [
  {
    "title": "Escuadra",
    "price": 123.45,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    "id": 1
  },
  {
    "title": "Calculadora",
    "price": 234.56,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
    "id": 2
  },
  {
    "title": "Globo Terráqueo",
    "price": 345.67,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    "id": 3
  },
  {
      "title": "Regla",
      "price": 13.5,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
      "id": 1
    },
    {
      "title": "Compás",
      "price": 78,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
      "id": 2
    },
    {
      "title": "Sacapuntas",
      "price": 5,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
      "id": 3
    }
 ]  

// PRIMERA PARTE
/* Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor */
app.get('/productos', (request, response) => {
  let productos = products.map((prod) => prod.title);
       response.send(productos)
})

/* Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles */

app.get('/productoRandom', (request, response) => {
    response.send(products[Math.floor(Math.random() * products.length)]);
}) 