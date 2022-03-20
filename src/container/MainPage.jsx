import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemCount from '../components/ItemCount/ItemCount';

function MainPage() {

const saludo = "esta es mi primera página con productos";
    
    return (

        <div>
            
            <NavBar/>
            
            <ItemListContainer saludo={saludo}/>

            <ItemCount/>
            
            
            
        </div>
        

    );
  }

  export default MainPage;
