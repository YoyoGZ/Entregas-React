import { useState, useContext} from "react";
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext";

const CardDetail = ( {id, titulo, autor, img, genero, precio, stock} ) => {

  const { cart} = useContext(cartContext);
    console.log("context:", cart);

  const [quantityAdded, setQuantityAdded] = useState(0);
  const handleOnAdd = (quantity) =>{
    setQuantityAdded(quantity)
  }

function onAddToCart() {

  alert (`Agregaste ${titulo} en el Cartito`)
}
  return (
          <div className="cardDetail">
                <div className="cardDetail_header">
                  <p className='h4'> Nro de Catalogo: {id}</p>
                  <h2 className="cardDetail_header">{titulo}</h2>
                  <h2 className="cardDetail_header">{autor}</h2>
                </div>
                <div className="cardDetail_img">
                  <img src={img} alt="imagen"></img>
                  <br/>
                  <p className="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quidem. Obcaecati sit unde, rem totam incidunt necessitatibus eaque amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor omnis dignissimos minus tempore reiciendis adipisci molestiae voluptates similique sapiente placeat</p>
                </div>
                <div>
                  <small className="cardDetail-genero">{genero}</small>
                  <h4 className="cardDetail_precio"> Precio: $ {precio}</h4>
                  <p className="cant-disp"> Cantidad Disponible = {stock}</p>
                  <footer>
                    {
                      quantityAdded > 0 ? (
                        <Link to ="/../Navbar/cartWidget" className="btn-endSale"> Terminar la compra </Link>
                      ) : (
                      <ItemCount  onAddToCart={onAddToCart} initial= {1} stock = {stock} addItem={handleOnAdd}  />
                      )
                    }                   
                  </footer>                  
                </div>
            </div>               
      )
}

export default CardDetail