import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import SecondPage from '../../container/SecondPage';

//en item detailcontainer, con un producto y su id, genero una promise (con loading) para despues llamar a Item Detail

function ItemDetailContainer() {

    

    const [propId, setProductos] = useState([]);
   const [loading, setLoading] = useState(true);


    const task = new Promise((resolve, reject)=>{
        let condition = true;
        if (condition) {
            setTimeout(() => {
                resolve(propId)
            }, 3000);
        }
        else{
            reject("400 not found");
        }
    });

 



    useEffect(() => {

              task
        .then(resp => {
            // setProductos(resp);
        }).catch(err => {
            console.log(err);
        }).finally(()=>{
            setLoading(false);
        })


    })

     

  return (
    <div className="background-item-list">
        <div className="d-flex justify-content-center">
            {loading 
                ? 
                    <div className="spinner-grow text-light m-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> 
                :
                    <div className="d-flex justify-content-center m-1">
                        <ItemDetail propId= {propId}/>
                    </div> 
            } 
        </div>
    </div>


  )
}



export default ItemDetailContainer