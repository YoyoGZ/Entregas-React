import Flex from "./Flex"
import { useState } from "react"

function ItemCount ({ stock }) {
  let [count, setCount] = useState(1);

  const handleSuma = () => {
    if (count < stock) setCount(count + 1);
  }

  const handleResta = () => {
    if (count > 1) count = count - 1;
  }
  
  return (
    <div className="box-ItCount">
        <div>
          <Flex>
            <button className="btn-countMin font-xl" onClick={handleResta}>-</button>
            <p className="count">{count}</p>
            <button className="btn-countMas font-xl" onClick={handleSuma}>+</button>
            <button className="btn-sumaCart">Agregar a Carrito</button>
          </Flex>  
        </div>
    </div>
  )
}

export default ItemCount