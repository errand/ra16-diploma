import { NavLink, useLocation } from "react-router-dom";
import { useState, useRef } from "react";

export default function Header() {
  const {pathname} = useLocation()
  const [active, setActive] = useState(false);
  const searchInput  = useRef(null);

  const handleSearchTogglerClick = () => {
    searchInput.current.focus();
    setActive(active => !active);
  }

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src="/img/header-logo.png" alt="Bosa Noga" />
            </a>
            <div className="collapase navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className={`nav-item${pathname === '/' ? ' active' : ''}`}>
                  <NavLink to="/" className="nav-link">Главная</NavLink>
                </li>
                <li className={`nav-item${pathname === '/catalog' ? ' active' : ''}`}>
                  <NavLink className="nav-link" to="/catalog">Каталог</NavLink>
                </li>
                <li className={`nav-item${pathname === '/about' ? ' active' : ''}`}>
                  <NavLink className="nav-link" to="/about">О магазине</NavLink>
                </li>
                <li className={`nav-item${pathname === '/contacts' ? ' active' : ''}`}>
                  <NavLink className="nav-link" to="/contacts">Контакты</NavLink>
                </li>
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div onClick={handleSearchTogglerClick} data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                  <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form data-id="search-form" className={`header-controls-search-form form-inline${active ? '' : ' invisible'}`}>
                  <input className="form-control" placeholder="Поиск" ref={searchInput} />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
