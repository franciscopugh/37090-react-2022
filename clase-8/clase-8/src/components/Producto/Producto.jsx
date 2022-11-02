import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import DetalleProducto from '../DetalleProducto/DetalleProducto';
import { consultarBDD } from '../../assets/funciones';
const Producto = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos =>{
            const prod = productos.find(productoArray => productoArray.id === parseInt(id))
            setProducto(prod)
        })
    }, []);

    return (
        <div>
            <div className=" card mb-3 container detalleProducto">
                <DetalleProducto producto={producto}/>
            </div>
        </div>
    );
}

export default Producto;
