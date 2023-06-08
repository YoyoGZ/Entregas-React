import { useState,  useEffect} from "react";
import ItemList from "./ItemList"
import libros from "../data/libros";
import { useParams } from "react-router-dom";

// ------ AsynMock Promise -------
function getLibros() {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(libros)
        }, 1000)
    }
)}

const ItemListContainer = ({ greeting }) =>{
    const [libros, setLibros] = useState ([]);
    const {genero} = useParams();

        useEffect(() => {
            getLibros()
                .then((libros) => {
                    if(genero){
                        const filterLibros = libros.filter(item => item.genero === genero);
                        setLibros(filterLibros);
                    }else{
                    setLibros(libros)  
                }})
    },[genero])

    //     useEffect(() => {
    //         getLibros()
    //             .then(response => {
    //                 setLibros(response)
    //             })
    //             .catch(error =>{
    //                 console.error(error)
    //             })            
    // }, )
            return (
                <div>
                    <p className="greeting">{greeting = "Bienvenidos a Nuestra Tienda On line"}</p>
                    <ItemList libros={libros}/>
                </div>
    )
}

export default ItemListContainer