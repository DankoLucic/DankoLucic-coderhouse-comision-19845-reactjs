import React from 'react';
import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';


const URL = "https://run.mocky.io/v3/ef452949-1ef2-4d13-a638-8062f92de773";


function ItemListContainer() {

   const [dataObjeto, setDataObjeto] = useState([]);
   const [loading, setLoading] = useState(true);
   const {categoriaId} = useParams();

   const [producto, setProducto] = useState({});
   const [productos, setProductos] = useState([]);

   //para obtener un dato en particular (itemDetailContainer)

//    useEffect(() => {
//         const querydb = getFirestore();
//         const queryProd = doc(querydb, "productos", "3F04ZugAh4UlsIsLawA0")
//         getDoc(queryProd)
//         // .then(resp => console.log(resp))
//         .then(resp => setProducto( { id: resp.id, ...resp.data() } ))
        
//    },[])

//    console.log(producto)

      //para traer todos (itemListContainer)
      useEffect(() => {
          if(categoriaId){

            const querydb = getFirestore();
            const queryCollector = collection(querydb, 'productos')
            // const queryFilter = query(queryCollector, where('category','==',String(categoriaId)))
            // getDocs(queryFilter)
            getDocs(queryCollector)
            .then(resp => resp.docs.map(item => ( { id: item.id, ...item.data() } )))
            .then(respuesta => setDataObjeto(respuesta.filter(item => ( item.category === categoriaId) )))
            .catch(err => {
                console.error("ERROR: ", err.message)})
            .finally(()=> {
                setLoading(false);
             });
             
          }
          else{
            const querydb = getFirestore();
            const queryCollector = collection(querydb, "productos")
            getDocs(queryCollector)
            .then(resp => setDataObjeto( resp.docs.map(item => ( { id: item.id, ...item.data() } ))))
            .catch(err => {
                console.error("ERROR: ", err.message)})
            .finally(()=> {
                setLoading(false);
             });
          }

   },[categoriaId])

   console.log(productos)

    


    // useEffect(() => {

    //         if(categoriaId){
    //             fetch(URL, {
    //                 method: 'GET', 
    //                 headers:{
    //                     "Content-Type": "application/json"
    //                 }
    //                })
    //             .then(response => {
    //                 return response.json();
    //             })
    //             .then(resp => {  
    //                 setDataObjeto((resp.products).filter((item) => item.category === categoriaId)); 
    //                 console.log("consumo fetch");
    //             }).catch(err => {
    //                 console.error("ERROR: ", err.message);  
    //             }).finally(()=> {
    //                 setLoading(false);
    //             });    
    //         }
    //         else{
    //             fetch(URL, {
    //                 method: 'GET', 
    //                 headers:{
    //                     "Content-Type": "application/json"
    //                 }
    //                })
    //             .then(response => {
    //                 return response.json();
    //             })
    //             .then(data => {
    //                 setDataObjeto(data.products);
    //                 console.log("consumo fetch");
    //             }).catch(err => {
    //                 console.error("ERROR: ", err.message);  
    //             }).finally(()=> {
    //                 setLoading(false);
    //             });
    //         }
    // },[categoriaId])
    




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