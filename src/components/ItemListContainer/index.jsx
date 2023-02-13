import './style.css'
import { ItemList, Spinner} from '../../components'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import arrayProductos from '../../data/products.json'

const ItemListContainer = () => {

  const { category } = useParams()
    const [productos, setProductos] = useState([])

    useEffect(() => {
        setProductos([])
      const promesa = new Promise( (res) => {
        setTimeout(() => {
            res(category ? arrayProductos.filter(prod => prod.categoria === category) : arrayProductos)
        }, 2000);
      })
      promesa.then( (data) => {
        setProductos(data)
      })
    }, [category])

  return (
    <>
      <div className='itemListContainer mt-4 container-fluid text-center fs-4 '>
        { (productos.length === 0) ? <Spinner /> : <ItemList productos={productos}/> }
      </div>
    </>
  )
}

export { ItemListContainer }