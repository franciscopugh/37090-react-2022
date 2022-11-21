import { createProducto, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra } from "./firebase";
/*
//createProducto(producto).then(mensaje => console.log(mensaje))
getProducto("SGKQWQuu3eoTU6K2OJlZ").then(prod => {
    prod.stock -= 10
    updateProducto("SGKQWQuu3eoTU6K2OJlZ", prod).then(mensaje => console.log(mensaje))
})

deleteProducto("SGKQWQuu3eoTU6K2OJlZ").then(mensaje => console.log(mensaje))*/
//wpcYkyiHFztCLKSRy8le
const cliente = {
    nombre: "Pedro",
    apellido: "Parker",
    email: "pedrito@parker.com",
    dni: 123123,
    direccion: "Calle Falsa 123"
}

createOrdenCompra(cliente, 12500, Date.now()).then(orden => console.log(orden))

getOrdenCompra("wpcYkyiHFztCLKSRy8le").then(orden => console.log(orden))