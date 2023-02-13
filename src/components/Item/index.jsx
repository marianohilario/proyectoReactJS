import React from 'react'
import './style.css'

const Item = ({ id, imagen, titulo, precio, onClick }) => {
    return (
        <>
            <div onClick={onClick} className="card mt-4 cursor">
                <img src={imagen} className="card-img-top" alt={titulo} />
                <div className="card-body">
                    <h5 className="card-title text-center">{titulo}</h5>
                    <p className="card-text text-center">$ {precio}</p>
                </div>
            </div>
        </>
    )
}

export { Item }