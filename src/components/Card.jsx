import React from "react";
import "../css/card.css";

function Card({ id, name, type, image }) {
  const typeClsss = (type) => {
    switch (type) {
      case "grass":
        return "card__type type--grass";
      case "fire":
        return "card__type type--fire";
      case "water":
        return "card__type type--water";
      case "bug":
        return "card__type type--bug";
      default:
        return "card__type";
    }
  };
  return (
    <div className="card">
      <div className="card__id">{id}</div>
      <div className="card__name">{name}</div>
      <div className={typeClsss(type)}>
        <h4>{type}</h4>
      </div>
      <div className="card__image">
        <img src={image} alt={name} />
      </div>
    </div>
  );
}

export default Card;
