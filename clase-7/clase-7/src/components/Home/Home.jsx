import {useState, useEffect} from 'react';
import {consultarBDD} from '../../assets/funciones.js'
const Home = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultarBDD().then(prod => setProductos(prod))
    },[]);
    
    return (
        <div className='row'>
            {productos}
        </div>
       
    );
}

export default Home;
