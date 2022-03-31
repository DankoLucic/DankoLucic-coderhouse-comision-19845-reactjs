import React from 'react'
import Item from '../Item/Item'

function ItemList({productosObjeto}) {
  return (
    <>
        {productosObjeto.map((productoObjeto)=> 
            <Item 
                key = {productoObjeto.id}
                productoObjeto = {productoObjeto}
            />
        )}
    </>

  )}

export default ItemList
