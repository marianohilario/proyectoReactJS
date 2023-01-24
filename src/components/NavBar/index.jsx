import { Cart } from "../CartWidget"
import './style.css'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-navBar">
        <div className="container-fluid">
          <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand text-white" href="#1">EBRA - <small>Deco</small></a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#1">Inicio</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#1">Aromatizantes</a></li>
                  <li><a className="dropdown-item" href="#1">Textiles</a></li>
                  <li><a className="dropdown-item" href="#1">Velas</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#1">Contacto</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="navbar-nav gap-3 pe-5 d-flex flex-row">
              <li>
                <a href="#1">
                  <i className="bi bi-search fs-4"></i>
                </a>
              </li>
              <li>
                <a href="#1">
                  <i className="bi bi-heart fs-4"></i>
                </a>
              </li>
              <li>
                <a href="#1"> 
                  <Cart /> 
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export { NavBar }