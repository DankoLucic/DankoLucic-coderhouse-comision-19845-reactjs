import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './CartItem.css';

function CartItem({cartItem, removeCartItem}) {

    const removeItem = () => {
        removeCartItem(cartItem);
    }

  return (
    <div className="p-2 contenedorCard  d-flex justify-content-center">
    <Card>
      <div className="d-flex w-75">
        <div className="">
        <Card.Img variant="top" src={cartItem.image}/>
        </div>
        <div className="">
        <Card.Body>
          <Card.Title>{`${cartItem.name}`}</Card.Title>
            <Card.Text>
              <div className="d-flex flex-column">
                  <div className="">
                  {`Cantidad : ${cartItem.cantidad}`}
                  </div>
                  <div>
                  {`Precio : ${cartItem.price}`}
                  </div>
              </div>
            </Card.Text>
            <Button variant="warning" onClick={removeItem}>{`Borrar`}</Button>
        </Card.Body>
        </div>
      </div>
    </Card>
    </div>
  )
}

export default CartItem