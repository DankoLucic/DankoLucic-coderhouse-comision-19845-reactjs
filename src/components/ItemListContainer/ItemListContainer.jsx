import React from 'react';
import './ItemListContainer.css';


function ItemListContainer({saludo}) {

    return (

      <div>
         <div className="background-item-list">
             <div className="text-item-list d-flex p-4 justify-content-center">
                 <h3 className="text-item-list">
                     {saludo}
                </h3>

             </div>
             
         </div>
      </div>

    );
  }

  export default ItemListContainer;