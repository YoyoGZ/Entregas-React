import ItemCard from "./ItemCard"

const ItemList = ({ libros }) =>{
    return (
        <div className="container" >
            {libros.map((libros) =>
            <ItemCard
            key={libros.id}
            id={libros.id}
            titulo={libros.titulo}
            autor={libros.autor}
            genero={libros.genero}
            img={libros.img}
            precio={libros.precio}
            stock={libros.stock}
            />
            )
          }          
         </div>
    )}

export default ItemList
