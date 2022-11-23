import {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProducto } from '../../assets/firebase.js'
const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        getProducto(id).then(prod => {
            setProducto(prod)
        })
    }, []);

    return (
        
        <div>
            <div className= "card mb-3 container itemDetail">
                <ItemDetail producto={producto}/>
            </div>
        </div>
    );
}

export default ItemDetailContainer;
