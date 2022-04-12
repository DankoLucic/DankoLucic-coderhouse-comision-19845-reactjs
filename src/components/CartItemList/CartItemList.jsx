import React from 'react'
import CartItem from '../CartItem/CartItem';
// import { useEffect, useState } from 'react';
// import Cart from '../Cart/Cart';


function CartItemList({cartList, funcionRemoveCart}) {

  console.log("cartItemList");

    const removeCartItem = (cartItem) => {
      funcionRemoveCart(cartItem);
      
    }

  return (
    <>
       {cartList.map(cartItem => <CartItem key = {cartItem.id} cartItem = {cartItem} removeCartItem = {removeCartItem}/>)}
    </>
  )
}

export default CartItemList