
const ProductManager = require("./Class")




const nuevoProducto = new ProductManager


nuevoProducto.addProducts('Tijera', 'Tijera Escolar Mapped', 200, 'ruta/img', 10, 100)
const productos = nuevoProducto.getProducts()


nuevoProducto.addProducts('Cascola', 'Cascola Escolar Mapped', 250, 'ruta/img', 10, 100)

const prodById = nuevoProducto.getProductById(1)

console.log(prodById)