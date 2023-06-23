import { useContext } from "react";
import { cartContext } from "../../../context/CartContext";
import { createOrder } from "../../../_services/firebase";
import { useNavigate } from "react-router-dom";

function ViewCart () {
    const {cart, removeItem, countPrecioTotal} = useContext(cartContext)
    const navigateTo = useNavigate()
    async function handleConfirm() {
        const order ={
            items: cart,
            cliente: {
                name: "Yoyo",
                Telefono: 456456,
                email: "yoyo@email.com"
            },
            date: new Date(),
            total: countPrecioTotal()
        }
        const id = await createOrder(order);
        console.log("respuesta", id);
        navigateTo("/ConfirmaCompra")
    }
  return (
    <div className="Viewcart">
        <h2> Tu Carrito de Compras</h2>
        {cart.map((item) => (
            <ul key= {item.id}>
                <li>
                    Producto: {item.titulo}
                    <br />
                    Cantidad: {item.count}
                    <br />
                    Precio: $ {( item.count * item.precio).toFixed(2) }
                    <button onClick={ ()=> removeItem (item.id)}>Eliminar Producto</button>
                    <button onClick={ handleConfirm }> Generar Orden de Compra</button>
                </li>
            </ul>
        ))
        }
    </div>
  )
}



export default ViewCart