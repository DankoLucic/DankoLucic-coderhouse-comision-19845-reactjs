import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemCount from '../components/ItemCount/ItemCount';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function SecondPage() {

const saludo = "esta es mi primera página con productos";
    
    return (
        
            <Link to="/detalle">hola</Link>

    );
  }

  export default SecondPage;