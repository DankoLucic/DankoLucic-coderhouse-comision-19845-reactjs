import React from 'react';
import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { prod } from '../ItemList/ItemList';


function ItemListContainer({saludo}) {

   const [productos, setProductos] = useState([]);
   const [loading, setLoading] = useState(true);


    const task = new Promise((resolve, reject)=>{
        let condition = true;
        if (condition) {
            setTimeout(() => {
                resolve(prod)
            }, 3000);
        }
        else{
            reject("400 not found");
        }
    });

   

    useEffect(() => {

        task
        .then(resp => {
            setProductos(resp);
        }).catch(err => {
            console.log(err);
        }).finally(()=>{
            setLoading(false);
        })
        
    }, [])
    

    return (

        <div>
            <div className="background-item-list">

                <div className="text-item-list d-flex p-4 justify-content-center">
                    <h3 className="text-item-list">
                        {saludo}
                    </h3>
                </div> 

                <div className="d-flex justify-content-center">
                    {loading 
                        ? 
                            <div className="spinner-grow text-light m-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div> 
                        :
                            <div className="d-flex justify-content-center m-1">
                                {productos.map((producto)=> 
                                    <div key={producto.id}>
                                        <Item
                                            prop1 = {producto} 
                                        />
                                    </div>
                                )}
                            </div> 
                    } 
                </div>
            </div>
        </div>
    )
  }

  export default ItemListContainer;