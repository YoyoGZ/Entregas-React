import { useState,  useEffect } from "react";
import { getLibros } from "../data/libros";
import ItemList from "../Items/ItemList/ItemList"
const ItemListContainer = ({ greeting }) =>{

    const [libros, setLibros] = useState ([])
        useEffect(() => {
            getLibros()
                .then(response => {
                    setLibros(response)
                })
                .catch(error =>{
                    console.error(error)
                })            
    }, [])
            return (
                <div>
                    <p className="greeting">{greeting = "Bienvenidos a Nuestra Tienda On line"}</p>
                    <ItemList libros={libros}/>
                </div>
    )
}

export default ItemListContainer