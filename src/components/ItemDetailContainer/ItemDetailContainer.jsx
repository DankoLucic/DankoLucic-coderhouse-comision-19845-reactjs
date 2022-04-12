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

   const URL = "https://run.mocky.io/v3/ef452949-1ef2-4d13-a638-8062f92de773";


   useEffect(() => {
        fetch(URL, {
            method: 'GET', 
            headers:{
                "Content-Type": "application/json"
            }
        }).then(response => {
        return response.json();
        }).then(resp => {
            setProductos((resp.products).find((item) => item.id === detalleId));
            console.log(producto);
        }).catch(err => {
        console.error("ERROR: ", err.message);  
        }).finally(()=> {
        setLoading(false);
        });

},[detalleId])

//RENDERING CONDICIONAL: IF CON RETURN TEMPRANO
//vendría mejor un ternario dado que en los los engloba el mismo DIV (se ahorra lìneas de código)
    if(loading){
       return (
        <div className="d-flex justify-content-center m-1">
            <Spinner animation="grow" />
        </div>
       )
    }
    return (
        <div className="d-flex justify-content-center m-1">
            <ItemDetail producto = {producto}/> 
        </div>
    )

}



export default ItemDetailContainer