import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({producto}) {
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
            <ItemCount stock = {producto.stock}/>
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