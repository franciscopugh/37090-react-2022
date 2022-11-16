import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Context
import { CartContextProvider } from '../context/CartContext';
//Componentes
import Navbar from './Navbar/Navbar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Checkout from './Checkout/Checkout'
const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}></Route>
          </Routes>
        </CartContextProvider>   
      </BrowserRouter>     
      
    </>
   
  );
}

export default App;