const fs = require("fs");

/* Recibe el nombre del archivo con el que se va trabajar */
const pathToFile = "products.json";

/* Creamos clase contenedor y sus métodos */
class Contenedor {


    /* Método que recibe un objeto, lo guarda en el archivo y devuelve el id asignado */

    save = async (product) => {
        try {
            if (fs.existsSync(pathToFile)) {

                let data = await fs.promises.readFile(pathToFile, "utf-8");
                let products = JSON.parse(data);
                let id = products[products.length - 1].id + 1;
                product.id = id;
                products.push(product);
                await fs.promises.writeFile(
                    pathToFile,
                    JSON.stringify(products, null, 2)
                );
                return {
                    status: "success",
                    message: `Product added with id ${product.id}`,
                };
            } else {
                product.id = 1;
                // Pasamos el producto como array
                await fs.promises.writeFile(
                    pathToFile,
                    JSON.stringify([product], null, 2)
                );
                return {
                    status: "success",
                    message: `Product Added with id ${product.id}`,
                };
            }
        } catch (err) {
            return { status: "error", message: err.message };
        }
    };

    /* Método que recibe un id y devuelve el objeto con ese id, o null si no está */
    getById = async (id) => {
        if (!id) return { status: "error", message: "id required" };
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, "utf-8");
            let products = JSON.parse(data);
            let product = products.find((product) => product.id === id);
            if (product) return { status: "success", message: product };
            return { status: "error", message: "product not found" };
        } else {
            return { status: "error", message: err.message };
        }
    };

    /*Método que devuelve un array con los objetos presentes en el archivo */
    getAll = async () => {
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, "utf-8");
            let products = JSON.parse(data);
            return { status: "success", message: products };
        } else {
            return { status: "error", message: err.message };
        }
    };

    /* Elimina del archivo el objeto con el id buscado */
    deleteById = async (id) => {
        if (!id) return { status: "error", message: "id required" };
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, "utf-8");
            let products = JSON.parse(data);
            let newProducts = products.filter((product) => product.id !== id);

            await fs.promises.writeFile(
                pathToFile,
                JSON.stringify(newProducts, null, 2)
            );
            return {
                status: "success",
                message: "Product deleted",
            };
        } else {
            return { status: "error", message: err.message };
        }
    };

    /* Elimina todos los objetos presentes en el archivo */
    deleteAll = async () => {
        if (fs.existsSync(pathToFile)) {
            let data = JSON.stringify([], null, 2);
            fs.writeFileSync(pathToFile, data);

            return { status: "success", message: "All products deleted" };
        } else {
            return { status: "error", message: err.message };
        }
    };
}

module.exports = Contenedor;
