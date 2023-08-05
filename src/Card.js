import React from "react";

export default function Card(props) {
  var description = props.data.description;
  var idealLength = 250;
  if (description.length > idealLength) {
    description = description.substr(0, idealLength) + "...";
  }

  return (
    <div className="card">
      <img src={props.data.img} alt="Book Cover" className="book-cover" />
      <div className="card-info">
        <div className="book-stats">
          <img
            src="https://www.svgrepo.com/show/13695/star.svg"
            alt="Star rating"
            className="stars"
          />
          <p title="Rating">{props.data.rating}</p>
          <p title="Review Count">({props.data.reviewCount})</p>
        </div>
        <h1 className="book-title">{props.data.title}</h1>
        <h3 className="book-author">{props.data.author}</h3>
        <p className="book-description">{description}</p>
      </div>
    </div>
  );
}
