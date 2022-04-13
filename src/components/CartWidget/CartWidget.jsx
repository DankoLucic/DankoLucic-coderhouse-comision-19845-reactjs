import React, { useState } from 'react';
import './CartWidget.css';
import { useCartContext } from '../../context/CartContext';

function CartWidget() {

  const { addToCart, cartList, removeToCart, getTotalPrice, getTotalItems } = useCartContext();

  const totalItemsCart = getTotalItems();




    return (
      <>
        {
          (totalItemsCart !== 0)
          ?
     
              `[${totalItemsCart}]`
     
          :
      
              ""

        }
          
     </>
    )

  }

  export default CartWidget;