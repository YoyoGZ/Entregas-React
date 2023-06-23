import { useContext } from "react"
import carrito1 from"../../../assets/carrito1.svg"
import { cartContext } from "../../../context/CartContext"

const CartWidget = () => {
    const {countItems} = useContext(cartContext)
    return (
    <div className="cart">
        <span> {countItems()}</span>
        <img src={carrito1} alt="Cart Widget"/>
    </div>
    )
}

export default CartWidget