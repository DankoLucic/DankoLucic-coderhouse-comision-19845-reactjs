import React, { useEffect } from 'react';
import { createContext, useContext, useState } from "react";


const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
} 

function CartContextProvider({children}){ 


  const [cartList, setCartList] = useState([]);
  const [auxiliar, setAuxiliar] = useState(true); //se setea un auxiliar para forzar un re-render.


  const getTotalItems = () => {
    let totalItems = 0;
    cartList.forEach(producto => totalItems = totalItems + Number(producto.cantidad));
    return totalItems;
  }

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartList.forEach(producto => totalPrice = totalPrice + Number(producto.price) * Number(producto.cantidad));
    return totalPrice;
  }
  
  const addToCart = (item) => {

    let index = Number(cartList.findIndex(producto => producto.id === item.id));
    console.log(index);

    if(index >= 0){
      
        if( Number(cartList[index].stock) >= ( Number(cartList[index].cantidad) + Number(item.cantidad) )){
            cartList[index].cantidad = Number(cartList[index].cantidad) + Number(item.cantidad);
            alert(`has agregado ${item.cantidad} productos al carrito`);
            setAuxiliar(!auxiliar);
        }
        else{
            alert(`has sobrepasado el stock! para este producto puedes llevar hasta ${(Number(cartList[index].stock) - cartList[index].cantidad)} producto(s) mas`);
        }
    }
    else{
      setCartList([...cartList, item]);
      alert(`has agregado ${item.cantidad} productos al carrito`);
    }
    
  }

  const removeToCart = (item) => {
    setCartList(cartList.filter(producto => producto.id !== item.id ));
  }

  return(
  
      <CartContext.Provider value={{cartList, addToCart, removeToCart, getTotalPrice, getTotalItems}}>
          {children}
      </CartContext.Provider>
    
  )

}


export default CartContextProvider

