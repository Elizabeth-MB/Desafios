const Contenedor = require('./Class/Contenedor.js')

const contenedor = new Contenedor()

let product = {
    title: 'Mapa',
    price: 110,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'
}

contenedor.save(product)
            .then(result => console.log(result))

/* contenedor.getAll()
            .then(result => console.log(result)) */

/* contenedor.getById(1)
            .then(result => console.log(result)) */

/* contenedor.deleteById(1)
            .then(result => console.log(result))
 */
/* contenedor.deleteAll()
            .then(result => console.log(result)) */