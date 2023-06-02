import { useState,  useEffect } from "react";
import ItemList from "./ItemList"
import libros from "./data/libros";

// ------ AsynMock Promise -------
function getLibros() {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(libros)
        }, 2000)
    }
)}
console.log(libros);

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