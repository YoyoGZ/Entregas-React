import { createContext, useState } from "react";


export const cartContext = createContext({ cart:[]});

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

function addItem(libro, count) {
   const newCart = [...cart];

   if(itemInCart(libro.id)) {
      let indice = cart.findIndex((cartItem) => cartItem.id === libro.id)
      newCart[indice].count += count;
      setCart(newCart)
   } else {
    newCart.push( {...libro, count});
    setCart(newCart)
   }

function itemInCart(id){
   return cart.some(item => item.id === (id))
   }
}

function countItems() {
   let total = 0;
   cart.forEach((item) => {
      total += item.count;
   });
   return total;
 }

function countPrecioTotal() {
   let total = 0;
   cart.forEach((item) => {
      total = item.precio
   })
   return total;
}
function clear() {
setCart([]);
}

function removeItem(idDelete){
      setCart (cart.filter( item => item.id !== idDelete));
}

 return(
<cartContext.Provider value={ {cart, setCart, addItem, countItems, removeItem, countPrecioTotal, clear} }>
 {children}

</cartContext.Provider>
 )}