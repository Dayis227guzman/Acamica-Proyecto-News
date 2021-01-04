import React from "react";

function New(props) {
  const { title, photoUrl, portal, url } = props;
  const onErrorImgURL =
    "https://www.bag.admin.ch/bag/en/home/das-bag/aktuell/news/news-30-04-2020/_jcr_content/image.imagespooler.png/1591370476301/588.1000/Icons-18.png";
  return (
    <div className="col-md-6  d-flex">
      <div className="card mb-4 shadow-sm">
        <img
          className="card-img-top"
          src={photoUrl || onErrorImgURL}
          alt={title}
        />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <div
                className="btn btn-sm btn-outline-secondary"
                onClick={() => window.open(url)}
              >
                Ver más
              </div>
            </div>
            <small className="text-muted">{portal}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
export default New;
