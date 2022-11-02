import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar';

import Home from './Home/Home';
import Producto from './Producto/Producto';
import Carrito from './Carrito/Carrito';
const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/producto/:id' element={<Producto/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
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
