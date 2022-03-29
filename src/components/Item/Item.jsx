import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { funcionDetail } from '../ItemDetailContainer/ItemDetailContainer';
import { Link } from 'react-router-dom';


function Item({prop1}) {
  return (
    <div className="p-2">
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>Producto Nº: {prop1.id}</Card.Title>
                <Card.Text>
                    Nombre Producto: {prop1.nombre}
                </Card.Text>
                <Button 
                // {<ItemDetailContainer propId = {propId}/>} //funcion para llamar a la funcióm Details
                variant="primary">
                  Detalle Producto
                </Button>
                
            </Card.Body>
        </Card>
    </div>
  )
}

export default Item