import { useState, useEffect } from "react";
import { getLibrosById } from "../data/libros";
import ItemCard from "../Items/ItemCard/ItemCard";
const ItemDetailContainer = () =>{

    const [libros, setLibros] = useState (null)
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
            <div className="itemDetCont">
                <ItemCard {...libros} ></ItemCard>
            </div>
    )
}
export default ItemDetailContainer