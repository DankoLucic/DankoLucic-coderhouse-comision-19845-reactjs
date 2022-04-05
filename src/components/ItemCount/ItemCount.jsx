import React from 'react';
import './ItemCount.css';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

export default function ItemCount({stock, onAdd}) {

  
  const [count,setCount] = useState(1);
  // const [date, setDate] = useState(Date());

  function reduceCount(){
    if(count > 1){
      setCount(count-1);
    }
    else{
      alert("has alcazando el minimo stock");
    }
    
  }

  function increaseCount(){
    if(count < stock){
      setCount(count+1);
    }
    else{
      alert("has alcanzado el máximo stock disponible");
    }
  }

  function addCart(){
    onAdd(count);
   
   
  }


  return (

    <div className='d-flex justify-content-center p-3'>
      <div className="div-border p-3">
        <div className="d-flex justify-content-center">
          <div className="d-flex align-items-center">
            <div>
              <Button className="btn-size" variant="warning" onClick={reduceCount}>Menos</Button>{''}
            </div>
            <div className="p-2">
              <label className="text-label">{count}</label>
            </div>
            <div>
              <Button className="btn-size" variant="warning" onClick={increaseCount}>Mas</Button>{''}
            </div>
          </div>
        </div>
        <div>
          <div className='d-flex m-1 justify-content-center'>
                <Button variant="warning" onClick={addCart}>Agregar al Carrito</Button>{''}
          </div>
        </div>
      </div>
    </div>
  )
}
