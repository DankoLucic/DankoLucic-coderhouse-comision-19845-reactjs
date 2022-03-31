import React from 'react';
import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


function ItemListContainer() {

   const [dataObjeto, setDataObjeto] = useState([]);
   const [loading, setLoading] = useState(true);
   const {categoriaId} = useParams(); 



// const URL = "https://run.mocky.io/v3/8437cdef-a302-487a-a03f-4605ad5a27c8";
   const URL = "https://run.mocky.io/v3/167295a8-5938-4761-b7d8-be50109ef17e";

   

    useEffect(() => {

        

        setTimeout(function(){

            if(categoriaId){
                fetch(URL, {
                    method: 'GET', 
                    headers:{
                        "Content-Type": "application/json"
                    }
                }).then(response => {
                    return response.json();
                }).then(resp => {
                    // console.log((resp.products[1]).category);
                    setDataObjeto((resp.products).filter((item) => item.category = categoriaId));
                    console.log(dataObjeto);
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
                }).then(response => {
                    return response.json();
                }).then(data => {
                    setDataObjeto(data.products);
                }).catch(err => {
                    console.error("ERROR: ", err.message);  
                }).finally(()=> {
                    setLoading(false);
                });

            }

        }, 2000);


    }, [categoriaId])
    

    return(

        <>
            <div className="d-flex justify-content-center m-1">
                {loading 
                    ? 
                        <Spinner animation="grow" />
                    :
                        <ItemList productosObjeto = {dataObjeto}/>
                } 
            </div> 
        </>
    )

  }

  export default ItemListContainer;