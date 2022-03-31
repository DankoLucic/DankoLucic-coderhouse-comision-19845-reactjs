import React from 'react'

function ItemDetail({producto}) {
  return (
    <>
        <div class="container p-5">
        <div class="row shadow-lg bg-body rounded p-4">
          <div class="col-lg-6 d-flex justify-content-center">
            
            <img src={producto.image}/>

          </div>
          <div class="col-lg-6 p-3">
            <div class="d-flex flex-column">
              <div class="p-1">
                <span class="fw-light text-black-50">INICIO / HOMBRE / CAMISAS</span>
              </div>
              <div class="p-1 pb-3">
                <span class="fs-4 fw-bold">Camisa Yellow Wood Casual Summer Edition</span>
              </div>
              <div class="p-2">
                <span class="fs-4 fw-bold text-black-50 text-decoration-line-through">$14.990</span>
                <span class="fs-4"> - </span>
                <span class="fs-4 fw-bold">$13.990</span>
              </div>
              <div class="p-3">
                <div class="row ">
                  <div class="col-2 d-flex justify-content-center">
                      <span>Talla</span>
                  </div>
                  <div class="col-10 w-50">
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                      <option selected>Elige una opción</option>
                      <option value="1">XS - Extra Small</option>
                      <option value="2">S  - Small</option>
                      <option value="3">M  - Medium</option>
                      <option value="4">L  - Large</option>
                      <option value="5">XL - Extra Large</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="p-3 d-flex justify-content-start w-50">
                <a class="btn btn-warning" href="#" role="button">Añadir al Carro</a>
              </div>
              <div class="p-1">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"></li>
                  <li class="list-group-item">
                    <span class="fw-light text-black-50"> SKU: ICEBERG000123456789XXX</span>
                  </li>
                  <li class="list-group-item">
                    <span class="fw-light text-black-50 fs-6">Categorías:</span>
                    <span class="fw-light">Ropa, Camisas, Hombre</span>
                  </li>
                  <li class="list-group-item">
                    <span class="fw-light text-black-50">Etiqueta:</span> 
                    <span class="fw-light">Camisas Hombre</span>
                  </li>
                  <li class="list-group-item"></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default ItemDetail