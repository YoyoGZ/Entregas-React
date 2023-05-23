import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ".//helpers/Styles.css"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
      <>
        <div>
            <NavBar />
        </div>
        <div>
          <ItemListContainer />
          <ItemDetailContainer />
        </div>  
      </>
        )}
export default App
