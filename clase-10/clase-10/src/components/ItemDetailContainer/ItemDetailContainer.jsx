import {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import { consultarBDD } from '../../assets/funciones';
import { DarkModeContext } from '../../context/darkMode';
const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    const {darkMode} = useContext(DarkModeContext)
    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos =>{
            const prod = productos.find(productoArray => productoArray.id === parseInt(id))
            setProducto(prod)
        })
    }, []);

    return (
        <div>
            <div className= {darkMode ? "darkMode card mb-3 container itemDetail": " card mb-3 container itemDetail"}>
                <ItemDetail producto={producto}/>
            </div>
        </div>
    );
}

export default ItemDetailContainer;
