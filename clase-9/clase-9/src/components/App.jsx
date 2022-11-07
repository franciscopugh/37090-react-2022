import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import ItemListContainer from './ItemListContainer/ItemListContainer';
const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
   
  );
}

export default App;

 /*const alumno1 = {nombre: "Pepe", apellido: "Perez"}
    const alumno2 = {nombre: "Maria", apellido: "Martinez"}
    const alumno3 = {nombre: "Pedro", apellido: "Parker"}

    const alumnos = [alumno1, alumno2, alumno3]

    const consultarAlumnos = (permiso) => {
        return new Promise( (res, rej) => {
            if(permiso) {
                res(alumnos)
            }
            rej("No cuenta con los permisos suficientes")
        })
    }

    consultarAlumnos(true)
    .then(x => console.log(x))
    .catch(error => console.error(error))*/
