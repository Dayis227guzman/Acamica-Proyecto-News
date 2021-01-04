import React from "react";
import New from "./New";
import { Link } from "react-router-dom";

class News extends React.Component {
  componentDidMount() {
    const { getNews, location } = this.props;
    getNews(location.pathname);
  }

  componentDidUpdate(prevProps) {
    let oldPath = prevProps.location.pathname;
    let newPath = this.props.location.pathname;
    if (newPath !== oldPath) {
      this.props.getNews(this.props.location.pathname);
    }
  }

  // PAGINACION
  getPaginationURL(page) {
    let path = this.props.location.pathname;
    let lastChar = path.charAt(path.length - 1);
    let lastChatInt = parseInt(lastChar, 10);
    if (lastChar === "/") {
      return `${path}${page}`;
    } else if (Number.isInteger(lastChatInt)) {
      return path.replace(lastChar, page);
    } else {
      return `${path}/${page}`;
    }
  }
  // PAGINACION

  // TITLE
  title() {
    let path = this.props.location.pathname;
    if (path.includes("search")) {
      return "Busqueda personalizada";
    }
    if (path.length < 6) {
      return "Noticia mas reciente";
    }
    if (path.includes("Internacionales")) {
      return "Noticia Internacional";
    }
    if (path.includes("Tecnologia")) {
      return "De Tecnologia";
    }
    if (path.includes("Espectaculos")) {
      return "sobre el Espectaculo";
    }
    if (path.includes("Deportes")) {
      return "Deporte";
    }
    if (path.includes("Diseno")) {
      return "Diseno";
    }
  }

  render() {
    let { news, hasError, isLoading } = this.props;

    // PAGINACION
    let numOfPages = 8;
    let newsForEachPage = new Array(numOfPages).fill(0);
    let path = this.props.location.pathname;
    let selectedPage = path.charAt(path.length - 1) - 1;
    if (news.length < 80) {
      numOfPages = Math.floor(news.length / 10);
      newsForEachPage = new Array(numOfPages).fill(0);
    }
    for (let i = 0; i < numOfPages; i++) {
      newsForEachPage[i] = news.slice(10 * i, 10 * (i + 1));
    }
    // PAGINACION

    if (hasError) {
      return (
        <div className="container">
          <h6>Error buscando noticias.</h6>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="container">
          <h6>Cargando...</h6>
        </div>
      );
    } else {
      return (
        <div>
          <nav aria-label="...">
            <ul className="pagination pagination-md">
              {newsForEachPage.map((not, i) => (
                <li className="page-item" key={i}>
                  <Link to={this.getPaginationURL(i + 1)}>
                    <span className="page-link">{i + 1}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="container-h1">
            <h1 className="titleh1">{this.title()}</h1>
          </div>
          <div className="album py-5 bg-light">
            <div className="container-fluid">
              <div className="row">
                {(newsForEachPage[selectedPage] || news.slice(0, 10)).map(
                  (each, i) => (
                    <New
                      title={each.title}
                      photoUrl={each.img_url}
                      portal={each.source_name}
                      url={each.url}
                      key={i}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default News;
