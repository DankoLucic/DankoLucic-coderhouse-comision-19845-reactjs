import React from 'react';
import logo from './marca_principal.png';
import './CartWidget.css';

function CartWidget() {

    return (

      <div>
         <div>
             <img className="img" src={logo} alt="" />
         </div>
      </div>

    );
  }

  export default CartWidget;