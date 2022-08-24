const fs = require('fs')

const pathToFile = '../products.txt'

/* Creamos clase contenedor y sus métodos */
class Contenedor {
     constructor(title, price, thumbnail, id) {
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
        this.id = id;
     }

     /* Método que recibe un objeto, lo guarda en el archivo y devuelve el id asignado */
     save(product) {
        try {
            if(fs.existsSync(pathToFile)) {

            } else {
                product.id = 1
                await fs.promises.writeFile(pathToFile, product)
                return {status: 'success', message: 'Product added'}
            }
        } catch (err) {
            return {status: 'error', message: err.message}
        }
     }
}

module.exports = Contenedor


// getById(id) {
//     /* Recibe un id y devuelve el objeto con ese id, o null si no está */
// }

// getAll() {
//     /* Devuelve un array con los objetos presentes en el archivo */
// }

// deleteById(id) {
//     /* Elimina del archivo el objeto con el id buscado */
// }

// deleteAll() {
//     /* Elimina todos los objetos presentes en el archivo */
// }