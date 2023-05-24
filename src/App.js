import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ".//helpers/Styles.css"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path= "/" element={ <ItemListContainer />}/>
          <Route path= "product" element={ <ItemDetailContainer />}/>
          <Route path= "*" element={<h4> Error 404 - Page not found</h4>}/>
        </Routes>  
      </BrowserRouter>
        )}
export default App
