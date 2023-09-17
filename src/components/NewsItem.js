import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, date, author, source } = props;
  return (
    <div className=" my-3">
      <div className="card" style={{ width: "20rem", alignItems: "center" }}>
        <img src={!imageUrl ? "https://medias.liberation.fr/photo/1375474-2021-02-margueritebornhauser-compiegnes-10jpg.jpg?modified_at=1612265502" : imageUrl} className="card-img-top" alt="..." style={{ left: '92%', zIndex: '1', boxShadow: ' 5px -5px 10px grey' }} />
        <div className="card-body" style={{ left: '92%', zIndex: '1', boxShadow: ' 5px 5px 10px grey' }}>
          <h5 className="card-title">{title}...<span
            class="position-absolute top-0 translate-middle badge rounded-pill bg-primary border border-light rounded-circle"
            style={{ left: '85%', zIndex: '1' }}>{source}
          </span></h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">Published by {!author ? "unknown" : author} <br /> on {new Date(date).toGMTString()}</small></p>
          <br />
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-outline-primary" style={{ left: '92%', zIndex: '1', boxShadow: ' 0px 5px 10px grey' }}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}


export default NewsItem;
