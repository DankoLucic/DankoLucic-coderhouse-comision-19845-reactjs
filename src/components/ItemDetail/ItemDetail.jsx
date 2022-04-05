import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext'


function ItemDetail({producto}) {

  const { addToCart, cartList } = useCartContext()

  const onAdd = (count) => {
    setState("secondState");
    addToCart({...producto, cantidad: count});
    alert(`has agregado ${count} productos al carrito`);
    
  }
  

  const [state, setState] = useState("firstState");

  const ButtonContinue = () => {
    return(
        <div className="m-3">  
            <div className='p-2'>
                <Link to="/">
                    <Button variant="warning">Continuar Comprando</Button>      
                </Link>
            </div>
            <div className='p-2'>
                <Link to="/cart">
                    <Button variant="warning">Terminar Compra</Button>      
                </Link>
            </div>
        </div>
    )
  } 


  console.log(cartList);
  
  return (

<div className="d-flex justify-content-center">       
  <Card>
  <Card.Header as="h5">{producto.name}</Card.Header>
  <Card.Body>

  <div className="d-flex justify-content-center ">
       <div>
          <img src={producto.image}/>  
       </div>

       <div className="d-flex flex-column">
          <div>
            {
              state === "firstState"
              ?
              <>
                  <ItemCount 
                    stock = {producto.stock}
                    onAdd = {onAdd}
                  />
              </>
              :
                  <ButtonContinue/>
            }
          </div>
          <div>
            <ListGroup variant="flush">
              <ListGroup.Item>ID: {producto.id}</ListGroup.Item>
              <ListGroup.Item>Category: {producto.category}</ListGroup.Item>
              <ListGroup.Item>Price: {producto.price}</ListGroup.Item>
              <ListGroup.Item>Stock: {producto.stock}</ListGroup.Item>
            </ListGroup>
          </div>
      </div>
    </div>
  </Card.Body>
</Card>

        
</div>
  )
}

export default ItemDetail