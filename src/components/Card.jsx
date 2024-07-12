import React, { useContext } from "react";
import "./Card.css";
import { CartContext } from "../context/CartContext";

const Card = ({ price }) => {
  const { increment, decrement } = useContext(CartContext);
  return (
    <div className="card">
      Card {price}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Card;
