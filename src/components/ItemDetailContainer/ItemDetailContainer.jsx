import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import libros from "../data/libros";
import CardDetail from "./CardDetail";

const ItemDetailContainer = () =>{

// ------ AsynMock Promise -------
    function getLibroById(id) {
        return new Promise ((resolve) => {
            setTimeout (() => {
                const buscaItem = libros.find((libro => libro.id === Number(id)))
                resolve(buscaItem);
            }, 500);
        })
    }
    const [libro, setLibro] = useState ({});
    const { id } = useParams();
        useEffect(() => {
            getLibroById(id)
                .then(response => {
                    setLibro(response)
                })
                .catch(error =>{
                    console.error(error)
                })            
    }, [id])
    
        return (
            <div>
                <CardDetail {...libro} ></CardDetail>
            </div>
    )
}
export default ItemDetailContainer