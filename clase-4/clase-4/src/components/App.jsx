import './app.css'
import Navbar from './Navbar/Navbar';
import FormBusqueda from './FormBusqueda/FormBusqueda';
const App = () => {
  return (
    <>
     <Navbar/>
     <FormBusqueda busqueda={"Buscar usuarios"}/>
    </>
   
  );
}

export default App;