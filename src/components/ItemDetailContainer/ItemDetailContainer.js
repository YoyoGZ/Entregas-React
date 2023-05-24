import { useState, useEffect } from "react";
import { getLibrosById } from "../data/libros";
import CardDetail from "../Items/CardDetail/CardDetail";
const ItemDetailContainer = () =>{

    const [libros, setLibros] = useState ([])
        useEffect(() => {
            getLibrosById()
                .then(response => {
                    setLibros(response)
                })
                .catch(error =>{
                    console.error(error)
                })            
    }, [])
        return (
            <div>
                <CardDetail {...libros} ></CardDetail>
            </div>
    )
}
export default ItemDetailContainer