import libros from "../data/libros"
import ItemCard from "../Items/ItemCard/ItemCard";
const ItemListContainer = () =>{
    console.log(libros);
    return (
        <div>
            ItemListContainer
            {libros.map((itemLibros) =>
            <ItemCard
            key={itemLibros.id}
            id={itemLibros.id}
            titulo={itemLibros.titulo}
            autor={itemLibros.autor}
            genero={itemLibros.genero}
            img={itemLibros.img}
            precio={itemLibros.precio}
            stock={itemLibros.stock}
            />
            )
          }
          
        </div>
    
    )
}

export default ItemListContainer