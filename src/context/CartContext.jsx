import { createContext, useContext, useState } from "react";
import ItemCount from "../components/ItemCount/ItemCount";
import ItemDetail from "../components/ItemDetail/ItemDetail";


const CartContext = createContext()

export const useCartContext = () => {
  return useContext(CartContext);
} 
//porqué no funciona con {}?? ¡ Gracias Pablo!


function CartContextProvider({children}){ 

  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {

    let index = Number(cartList.findIndex(producto => producto.id === item.id));
    console.log(index);

    if(index >= 0){
      
        if( Number(cartList[index].stock) >= ( Number(cartList[index].cantidad) + Number(item.cantidad) )){
            cartList[index].cantidad = Number(cartList[index].cantidad) + Number(item.cantidad);
            alert(`has agregado ${item.cantidad} productos al carrito`);
            // <ItemDetail producto = {cartList[index]}/>
            //tendríamos que hacer un fetch(post)para modificar el stock en el objeto en mocky ¿se podrá hacer?
        }
        else{
            alert(`has sobrepasado el stock! para este producto puedes llevar hasta ${(Number(cartList[index].stock) - cartList[index].cantidad)} producto(s) mas`);
        }
        
    }
    else{

      setCartList([...cartList, item]);
      alert(`has agregado ${item.cantidad} productos al carrito`);

      // <ItemDetail producto = {cartList[index]}/>
      //tendríamos que hacer un fetch(post)para modificar el stock en el objeto en mocky ¿se podrá hacer?

    }
    
  }

  return(
  
      <CartContext.Provider value={{cartList, addToCart}}>
          {children}
      </CartContext.Provider>
    
  )

}


export default CartContextProvider

