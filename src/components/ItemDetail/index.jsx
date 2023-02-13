import React from 'react'
import { useParams } from 'react-router-dom'
import arrayProductos from '../../data/products.json'
import './style.css'

const ItemDetail = () => {

  const idProduct = useParams()

  const filter = arrayProductos.filter(prod => prod.id === idProduct.id)
    
  return (
    <>
        <div className="card my-3 container card-height">
            <div className="row g-0">
                <div className="col-md-4 card-height">
                <img src={filter[0].imagen} className="img-fluid rounded-start card-height" alt={filter[0].titulo} />
                </div>
                <div className="col-md-8 card-body">
                    <h5 className="card-title fs-3">{filter[0].titulo}</h5>
                    <p className="card-text">{filter[0].descripcion} {filter[0].titulo}</p>
                    <p className="card-text-price fw-bold fs-4">$ {filter[0].precio}</p>
                    <input type="submit" className= "btn btn-outline-secondary " value="Agregar al Carrito" />
                </div>
            </div>
        </div>
    </>
  )
}

export { ItemDetail }