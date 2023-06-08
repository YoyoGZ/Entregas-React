import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ".//helpers/Styles.css"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path= "/" element={ <ItemListContainer />}/>
          <Route path= "/ItemList/:id" element={<ItemDetailContainer/>}/>
          <Route path= "/genero/:genero" element={<ItemListContainer/>}/>
          <Route path= "/Contacto" element={<h2>Err 404 - Pagina NO disponible</h2>}/>
        </Routes>  
      </BrowserRouter>
        )}
export default App
