import React from "react";
import "./Card.css";

const Card = ({ price }) => {
  return (
    <div className="card">
      Card {price}
      <button>+</button>
    </div>
  );
};

export default Card;
