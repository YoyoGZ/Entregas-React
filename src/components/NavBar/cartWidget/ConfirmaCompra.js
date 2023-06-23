import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
function ConfirmaCompra() {
  const { orderid } = useParams()
  return (
    <div className="Viewcart">
        <h2> Gracias por tu Compra</h2>
        <p> Tu comprobante de Compra es : {orderid}</p>
        <Link to ="/" className="btn-comprarMas"> Continuar comprando </Link>
    </div>
  )
}

export default ConfirmaCompra
