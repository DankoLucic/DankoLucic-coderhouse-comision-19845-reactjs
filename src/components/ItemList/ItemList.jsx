import React from 'react'
import Item from '../Item/Item'

function ItemList({productos}) {
  return (
    <>
        {productos.map((producto)=> 
            <Item 
                key = {producto.id}
                prop1 = {producto}
            />
        )}
    </>

  )}

export default ItemList
