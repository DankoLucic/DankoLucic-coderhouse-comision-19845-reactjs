import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
// import ItemCount from '../components/ItemCount/ItemCount';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';

function RoutesApp() {
    
    return (
        
        <BrowserRouter>
            <NavBar/> 
            <Routes>
                <Route path="/"
                    element={<ItemListContainer/>}
                    />
                <Route 
                    path="/detalle/:detalleId"
                    element= {<ItemDetailContainer/>}
                    />
                <Route 
                    path="/cart" 
                    element = {<Cart/>}
                />
                <Route 
                    path="/categoria/:categoriaId" 
                    element = {<ItemListContainer/>}
                />
                
            </Routes>
        </BrowserRouter>
    );
  }

  export default RoutesApp;