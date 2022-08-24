const Contenedor = require('./Class/Contenedor.js')

const contenedor = new Contenedor()

let product = {
    title: 'Regla',
    price: 6.00,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'
}

contenedor.save(product)
            .then(result => console.log(result))