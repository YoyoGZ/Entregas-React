import ItemCard from "../ItemCard/ItemCard"

const ItemList = ({libros }) =>{
    return (
        <div className="container" >
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
    )}

export default ItemList
