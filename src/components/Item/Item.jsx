import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';


function Item({productoObjeto}) {
  return (
    <div className="p-2">
        <Card style={{ width: '18rem'  }}>
            <Card.Img variant="top" src={productoObjeto.image} />
            <Card.Body>
                <Card.Title>{productoObjeto.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>ID: {productoObjeto.id}</ListGroupItem>
              <ListGroupItem>Category: {productoObjeto.category}</ListGroupItem>
              <ListGroupItem>Price: {productoObjeto.price}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Link to={`/detalle/${productoObjeto.id}`}>
                <Button 
                  variant="primary">
                    Details
                </Button>
            </Link>
          </Card.Body>

        </Card>
    </div>
  )
}

export default Item