import React from 'react';
import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';



function ItemListContainer({saludo}) {

   const [productos, setProductos] = useState([]);
   const [loading, setLoading] = useState(true);
   const URL = "https://run.mocky.io/v3/0e8bb036-d20e-49ab-bb14-262710a5c64f";

    // const task = new Promise((resolve, reject)=>{
    //     let condition = true;
    //     if (condition) {
    //         setTimeout(() => {
    //             resolve(prod)
    //         }, 3000);
    //     }
    //     else{
    //         reject("400 not found");
    //     }
    // });

    useEffect(() => {

        // task
        // .then(resp => {
        //     setProductos(resp);
        // }).catch(err => {
        //     console.log(err);
        // }).finally(()=>{
        //     setLoading(false);
        // })

        fetch(URL, {
            method: 'GET', 
            headers:{
                "Content-Type": "application/json"
                // "Content-Type": "multipart/form-data"
            }
        }).then(response => {
            if (response.ok){
                return response.json();
            }
            // else{
            //     throw new Error(response.status);
            // }
        }).then(data => {
            setProductos(data);
            console.log(data);
        }).catch(err => {
            console.error("ERROR: ", err.message);  
        }).finally(()=> {
            setLoading(false);
            console.log("finally")
        });
        
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
                                <ItemList productos = {productos}/>
                            </div> 
                    } 
                </div>
            </div>
        </div>
    )
  }

  export default ItemListContainer;