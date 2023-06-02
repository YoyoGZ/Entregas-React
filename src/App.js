import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ".//helpers/Styles.css"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path= "/" element={ <ItemListContainer />}/>
          <Route path= "CardDetail/:id" element={<ItemDetailContainer/>}/>
          <Route path= "/Clasicos" element={<h4> Error 404 - Page not found</h4>}/>
          <Route path= "/Novelas" element={<h4> Error 404 - Page not found</h4>}/>
          <Route path= "/Ensayos" element={<h1> Error 404 - Page not found</h1>}/>
          <Route path= "/Contacto" element={<h4> Error 404 - Page not found</h4>}/>
        </Routes>  
      </BrowserRouter>
        )}
export default App
