import React from "react";

const NewsItem= (props) => {
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
      <div className="my-3">
        <div className="card" />
        <img
          src={
            !imageUrl
              ? "https://responsive.fxempire.com/width/600/webp-lossy-70.q50/_fxempire_/2021/10/Depositphotos_24448463_S-1-3.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    );
}

export default NewsItem
