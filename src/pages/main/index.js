import { ItemListContainer } from '../../components'
import { NavBar } from '../../components/NavBar'

const MainPage = () => {

  return (
    <>
      <header>
        <NavBar />
        <ItemListContainer greeting={"Bienvenido!!!"} />
      </header>

      <main></main>

      <footer></footer>
    </>
  )
}

export { MainPage }