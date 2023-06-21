import { useContext } from "react";
import { cartContext } from "../../../context/CartContext";


function ViewCart () {
    const {cart, removeItem} = useContext(cartContext)
  return (
    <div className="Viewcart">
        <h2> Tu Carrito de Compras</h2>
        {cart.map((item) => (
            <ul key= {item.id}>
                <li>
                    Producto: {item.title}
                    <br />
                    Cantidad: {item.count}
                    <br />
                    Precio: $ {item.count}*{item.precio}
                    <button onClick={ ()=> removeItem (item.id)}>Eliminar Producto</button>
                </li>

            </ul>
        ))
        }

    </div>
  )
}

export default ViewCart