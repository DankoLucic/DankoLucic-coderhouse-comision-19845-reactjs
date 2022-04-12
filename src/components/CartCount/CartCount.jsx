import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CartCount({cartPrice}) {
 
  return (
<div className="p-2">
    <Card>
      <Card.Header>Total Compra</Card.Header>
      <Card.Body>
        <Card.Title>{`${cartPrice}`}</Card.Title>
        <Button variant="warning">Comprar</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CartCount