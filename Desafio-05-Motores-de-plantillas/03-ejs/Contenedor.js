let products = require('./products.js')

class Contenedor {
    
    create = (product) => {
        let id = products[products.length - 1].id + 1;
        product.price = parseInt(product.price)
        product = {
            id,
            ...product
        }
        products.push(product)
        return product
    }
        
    getById = (id) => {
        id = parseInt(id)
        return products.find(item => item.id === id)
    }


    getAll = () => {
        return products
    }

    delete = (id) => {
        id = parseInt(id)
        let newProducts = products.filter(item => item.id !== id)
        products = newProducts
        return products
    }

    update = (id, product) => {
        id = parseInt(id)
        let newProducts = products.map(item => {
            if (item.id === id){
                return {
                    id,
                    ...product
                }
            } else return item
        })
        products = newProducts
        return this.getById(id)
    }


}

module.exports = Contenedor;
