import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import CartContextProvider from '../context/CartContext';

function RoutesApp(){
    
    return (
        
        <BrowserRouter>
            <CartContextProvider>
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
                    <Route 
                        path="/*" 
                        element = {
                            <Navigate to="/" replace 
                            />
                        }
                    />
                </Routes>
            </CartContextProvider>
        </BrowserRouter>
    );
  }

  export default RoutesApp;