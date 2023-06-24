import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
function ConfirmaCompra() {
  const { orderid } = useParams()
  return (
    <div className="Viewcart">
        <h2> Gracias por tu Compra</h2>
        <h2> Tu comprobante de Compra es : {orderid}</h2>
        <Link to ="/" className="btn-comprarMas"> Continuar comprando </Link>
    </div>
  )
}

export default ConfirmaCompra
