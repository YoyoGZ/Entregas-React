import { useContext } from "react";
import { cartContext } from "../../../context/CartContext";
import { createOrder } from "../../../_services/firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ViewCart () {
    const {cart, removeItem, countPrecioTotal,clear} = useContext(cartContext)
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
        clear()
        navigateTo(`/ConfirmaCompra/ ${id}`)
    }
  return (
    <div className="Viewcart">
        <h2 className="titu-VC"> Tu Carrito de Compras</h2>
        {cart.map((item) => (
            <ul key= {item.id}>
                <li className="introVC">
                    Producto: {item.titulo}
                    <br />
                    Cantidad: {item.count}
                    <br />
                    Precio: $ {( item.count * item.precio).toFixed(2) }
                    <button onClick={ ()=> removeItem (item.id) } className="btn-comprarMas">Eliminar Producto</button>
                    <br/>
                    <button onClick={ handleConfirm } className="btn-comprarMas"> Generar Orden de Compra</button>
                    <Link to ="/" className="btn-comprarMas"> Continuar comprando </Link>
                </li>
            </ul>
        ))
        }
    </div>
  )
}



export default ViewCart