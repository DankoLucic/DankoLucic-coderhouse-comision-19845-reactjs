import {memo}from 'react'
import Item from '../Item/Item'

//memo(fn) fn=componente // memo (fn, FN) FN = funcion comparadora

  const ItemList = memo(
      ({productosObjeto}) => {
          return (
            <>
              {productosObjeto.map(productoObjeto => <Item key = {productoObjeto.id} productoObjeto = {productoObjeto}/>)}
            </>
          )
      }
      //condición de memo; si la condición es true no renderiza, si es distinta, renderiza.
      //si el largo actual de productos es igual al largo nuevo, entonces no renderices (no hay necesidad), si es distinto (porque se agregaron o quitaron items), renderiza nuevamente).
  , (oldProp, newProp)=> oldProp.productosObjeto.length === newProp.productosObjeto.length)

 


export default ItemList



