import { createContext, useState } from "react";


export const cartContext = createContext({ cart:[]});

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

 function addItem(libro, count) {
    const newCart = [...cart];
    newCart.push( {...libro, count});
    setCart(newCart)
  
 }
 return(
<cartContext.Provider value={ {cart, setCart, addItem}}>
 {children}

</cartContext.Provider>
 )}