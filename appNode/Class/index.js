class ProductManager{

    constructor(){
        this.products = []
    }

    addProducts( title, description, price, thumbnail, code, stock){
        const infoProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: 1
        }
        this.products.push(infoProduct)
        infoProduct.id++;
    }

    getProducts(){
        return this.products
    }

    getProductById(id){
        this.products.indexOf(id)
    }
}


module.exports = ProductManager



