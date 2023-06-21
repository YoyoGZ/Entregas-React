import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import ItemCount from "./ItemCount"
import { cartContext } from "../../context/CartContext";
import Loader from "../Loader";
import { getLibroById } from "../../_services/firebase";;

    const ItemDetailContainer = () =>{
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

// ---- Context ------

    const { cart, addItem } = useContext(cartContext);
    console.log("context:", cart);

// ----- Agrega prod al carrito ------
    const [quantityAdded, setQuantityAdded] = useState(0);
    const handleOnAdd = (count) =>{
    addItem(libro, count)
    setQuantityAdded(count)
    alert(`Agregaste ${count} ${libro.titulo} al carrito`)
    }

    if(libro) {
    return (
        <div className="cardDetail">
            <div className="cardDetail_header">
                <p className='h4'> N° de Catalogo: {libro.id}</p>
                <h2 className="cardDetail_header">{libro.titulo}</h2>
                <h2 className="cardDetail_header">{libro.autor}</h2>
            </div>
            <div className="cardDetail_img">
                <img src={libro.img} alt="imagen"></img>
                <br/>
                <p className="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quidem. Obcaecati sit unde, rem totam incidunt necessitatibus eaque amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor omnis dignissimos minus tempore reiciendis adipisci molestiae voluptates similique sapiente placeat</p>
            </div>
            <div>
                <small className="cardDetail-genero">{libro.genero}</small>
                <h4 className="cardDetail_precio"> Precio: $ {libro.precio}</h4>
                <p className="cant-disp"> Cantidad Disponible = {libro.stock}</p>
                <footer>
                {
                    quantityAdded > 0 ? (
                    <Link to ="./Navbar/cartWidget/ViewCart" className="btn-endSale"> Terminar la compra </Link>
                    ) : (
                    <ItemCount initial= {1} stock = {libro.stock} addItem={handleOnAdd} />
                    )
                }                   
                </footer>                  
            </div>
        </div>    
    )
}
return <Loader/>;
}
export default ItemDetailContainer