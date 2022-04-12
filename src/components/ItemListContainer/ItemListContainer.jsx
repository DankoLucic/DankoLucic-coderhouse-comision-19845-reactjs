import React from 'react';
import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getFirestoreApp } from '../../firebase/firebase';

const URL = "https://run.mocky.io/v3/ef452949-1ef2-4d13-a638-8062f92de773";


function ItemListContainer() {

   const [dataObjeto, setDataObjeto] = useState([]);
   const [loading, setLoading] = useState(true);
   const {categoriaId} = useParams(); 
    
    useEffect(() => {

            if(categoriaId){
                fetch(URL, {
                    method: 'GET', 
                    headers:{
                        "Content-Type": "application/json"
                    }
                   })
                .then(response => {
                    return response.json();
                })
                .then(resp => {  
                    setDataObjeto((resp.products).filter((item) => item.category === categoriaId)); 
                    console.log("consumo fetch");
                }).catch(err => {
                    console.error("ERROR: ", err.message);  
                }).finally(()=> {
                    setLoading(false);
                });    
            }
            else{
                fetch(URL, {
                    method: 'GET', 
                    headers:{
                        "Content-Type": "application/json"
                    }
                   })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    setDataObjeto(data.products);
                    console.log("consumo fetch");
                }).catch(err => {
                    console.error("ERROR: ", err.message);  
                }).finally(()=> {
                    setLoading(false);
                });
            }
    },[categoriaId])
    




    return(

        <>
            <div className="d-flex justify-content-center m-1">
                {
                loading
                    ? 
                        <Spinner animation="grow"/>
                    :
                        <ItemList productosObjeto = {dataObjeto}/>
                } 
            </div> 
        </>
    )

  }

  export default ItemListContainer;