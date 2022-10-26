import './app.css'
import Navbar from './Navbar/Navbar';
import ItemCount from './ItemCount/ItemCount';
import Home from './Home/Home';
const App = () => {
  
  return (
    <>
     <Navbar/>
      <Home/> 
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
