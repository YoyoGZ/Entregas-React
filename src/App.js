import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ".//helpers/Styles.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CartContextProvider} from "./context/CartContext";
import ViewCart from './components/NavBar/cartWidget/ViewCart';
import ConfirmaCompra from './components/NavBar/cartWidget/ConfirmaCompra';


function App() {
  return (
    <div>
      <CartContextProvider>        
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path= "/" element={ <ItemListContainer />} />
              <Route path= "/ItemList/:id" element={<ItemDetailContainer/>} />
              <Route path= "/genero/:genero" element={<ItemListContainer/>} />
              <Route path= "/cart" element={<ViewCart/>} />
              <Route path= "/ConfirmaCompra" element={<ConfirmaCompra/>} />
              <Route path= "/Contacto" element={<h2>Err 404 - Pagina NO disponible</h2>}/>
            </Routes>  
        </BrowserRouter>
        </CartContextProvider>
      
      </div>
        )}
export default App
