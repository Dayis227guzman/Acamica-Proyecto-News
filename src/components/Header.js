import React from "react";
import { Link } from "react-router-dom";

function Header({ changeSearch, value }) {
  const categories = [
    "Internacionales",
    "Tecnologia",
    "Espectaculos",
    "Deportes",
    "Diseno"
  ];
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <div className="navbar-brand">
            <i className="fas fa-newspaper"></i> Noticias
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/">
                <div
                  className="nav-link"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  Home <span className="sr-only">(current)</span>
                </div>
              </Link>
            </li>
            {categories.map((category, i) => {
              return (
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                  key={i}
                >
                  <Link to={`/${category}`}>
                    <div className="nav-link">{category}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Buscar palabras clave"
              aria-label="Search"
              onChange={changeSearch}
            />
            <Link to={`/search/${value}`}>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Buscar
              </button>
            </Link>
          </form>
        </div>
      </nav>
    </header>
  );
}
export default Header;
