import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, date, author } = props;
  return (
    <div className="my-2">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            imageUrl === null
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WsG__YePAze-z0YcZuad0PQDgrruhkT5nQ&s"
              : imageUrl
          }
          onError={(e) =>
            (e.target.src =
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WsG__YePAze-z0YcZuad0PQDgrruhkT5nQ&s")
          }
          className="card-img-top"
          alt="..."
          style={{ width: "286px", height: "120px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary" style={{ fontSize: "12px" }}>
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toLocaleDateString()}
            </small>
          </p>

          <a href={newsUrl} target="blank" className="btn btn-dark btn-sm">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
