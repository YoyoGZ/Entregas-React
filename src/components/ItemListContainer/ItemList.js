import Loader from "../Loader"
import ItemCard from "./ItemCard"

const ItemList = ({ libros }) =>{
    if(libros.length === 0) return <Loader/>
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
            descuento={libros.descuento}
            precio={libros.precio}
            stock={libros.stock}
            />
            )
          }          
         </div>
    )}

export default ItemList
