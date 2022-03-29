import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemCount from '../components/ItemCount/ItemCount';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function MainPage() {

const saludo = "esta es mi primera página con productos";
    
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/"
                    element={<ItemListContainer saludo={saludo}/>}
                    />
                <Route 
                    path="/detalle"
                    element= {<ItemCount/>}
                    />
                <Route/>
                
            </Routes>
        </BrowserRouter>
    );
  }

  export default MainPage;
