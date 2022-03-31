import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

//en item detailcontainer, con un producto y su id, genero una promise (con loading) para despues llamar a Item Detail

function ItemDetailContainer() {


   const [producto, setProductos] = useState("");
   const [loading, setLoading] = useState(true);
   const {detalleId} = useParams(); 

//    const URL = "https://run.mocky.io/v3/8437cdef-a302-487a-a03f-4605ad5a27c8";
   const URL = "https://run.mocky.io/v3/167295a8-5938-4761-b7d8-be50109ef17e";


   useEffect(() => {
        fetch(URL, {
            method: 'GET', 
            headers:{
                "Content-Type": "application/json"
            }
        }).then(response => {
        return response.json();
        }).then(resp => {
            setProductos((resp.products).find((item) => item.id == detalleId));
            console.log(producto);
        }).catch(err => {
        console.error("ERROR: ", err.message);  
        }).finally(()=> {
        setLoading(false);
        });

},[])

    // const task = new Promise((resolve, reject)=>{
    //     let condition = true;
    //     if (condition) {
    //         setTimeout(() => { 
    //             resolve(detalleId);
    //         },2000);
    //     }
    //     else{
    //         reject("400 not found");
    //     }
    // });

    // useEffect(() => {

    //         task
    //         .then(resp => {
    //             setProductos(resp);
    //         }).catch(err => {
    //             console.log(err);
    //         }).finally(()=>{
    //             setLoading(false);
    //         });    

    // },[])

     
  return (
    <>
        {loading
            ? 
                <Spinner animation="grow" />
            :
                <ItemDetail producto = {producto}/>           
        }  
    </>
  )
}



export default ItemDetailContainer