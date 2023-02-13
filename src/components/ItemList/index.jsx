import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Item } from '../../components'

const ItemList = ( { productos } ) => {

    const navigate = useNavigate() 

    
  return (
    <>
        <div className='container'>
            <div className='row'>
                {productos.map(({ id, imagen, titulo, precio }) => {
                    return (
                        <div className='col-xxl-3 col-xl-4 col-lg-6' key={id}>
                            <Item 
                                id={id}
                                imagen={imagen}
                                titulo={titulo}
                                precio={precio}
                                onClick = {() => navigate(`/item/${id}`)}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export { ItemList }