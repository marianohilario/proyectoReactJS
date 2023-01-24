import './style.css'

const ItemListContainer = ( {greeting} ) => {
  return (
    <>
      <div className='itemListContainer mt-4 container-fluid text-center fs-5 '>
        {greeting}
      </div>
    </>
  )
}

export {ItemListContainer}