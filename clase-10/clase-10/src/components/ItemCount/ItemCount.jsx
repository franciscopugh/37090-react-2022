import {useState} from 'react';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1) //valor inicial

    const agregarAlCarrito = () => {
        onAdd(contador)
    }

    const incrementar = () => contador < stock && setContador(contador + 1)

    const decrementar = () => contador > 1 && setContador(contador - 1)
    
    return (
        <>
            <button onClick={decrementar} className='btn btn-light botItem'><i class="fas fa-minus"></i></button>
                    {contador}
            <button onClick={incrementar} className='btn btn-light botItem'><i class="fas fa-plus"></i></button>
            <button className="btn btn-dark" onClick={agregarAlCarrito}><i class="fas fa-cart-plus"></i></button>
        </>
    );
}

export default ItemCount;
