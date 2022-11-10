import {useContext, useState, createContext} from 'react'

const CartContext = createContext([])

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.find(prod => prod.id === id)
    }

    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)) {
            const indice = cart.findIndex(prod => prod.id === id)
            const aux = [...cart]
            aux[indice].cant = cantidad
            setCart(aux)
        } else {
            const nuevoProducto = {
                ...producto,
                cant: cantidad
            }

            setCart([...cart, nuevoProducto])
        }
    }

}