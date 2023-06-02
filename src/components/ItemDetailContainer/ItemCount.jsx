import Flex from "./Flex"
import { useState } from "react"

function ItemCount ({ stock }) {
  const [count, setCount] = useState(1);

  function handleSuma () {
    if (count < stock) setCount(count+1);
  }

  function handleRest () {
    if (count > 1) setCount(count-1);
  }
  
  return (
    <div className="btns-count">
        <div>
          <Flex>
            <button className="btn-countMin font-xl" onClick={handleRest}>-</button>
            <p className="count">{count}</p>
            <button className="btn-countMas font-xl" onClick={handleSuma}>+</button>
          </Flex>  
        </div>
    </div>
  )
}

export default ItemCount