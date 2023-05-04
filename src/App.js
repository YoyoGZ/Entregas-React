
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/items/itLiCont/itemListContainer';


function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greting={"Bienvenidos !!"}/>
    </div>
  );
}

export default App;
