import React, { useEffect, useState } from 'react'
import CartCount from '../CartCount/CartCount';
import CartItemList from '../CartItemList/CartItemList';
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

function Cart() {

  const { addToCart, cartList, removeToCart, getTotalPrice } = useCartContext();

  console.log("esto es CART")

  const cartPrice = getTotalPrice();

  const funcionRemoveCart = (cartItem) => {
    removeToCart(cartItem);
    
  }

  
  return (
    <>
    {
      (cartList.length != 0)
      ?
        <div className="d-flex justify-content-center">
            <div>
              <CartItemList cartList = {cartList} funcionRemoveCart = {funcionRemoveCart}/>
            </div>
            <div>
              <CartCount cartPrice = {cartPrice}/>
            </div>
        </div>
        
      :
      <div className= "d-flex justify-content-center">
        <Link to="/">
          <Button variant="warning"> Volver al Home</Button>  
        </Link>
      </div>
      
    }
    </>
  )
}

export default Cart