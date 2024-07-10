import { useContext } from "react";
import Card from "./Card";
import "./Cards.css";
import { CartContext } from "../context/CartContext";

const Cards = () => {
  console.log("cards render");
  const { val2 } = useContext(CartContext);
  return (
    <div className="cards">
      {[1, 2].map((price) => {
        return <Card key={price} price={price} />;
      })}
    </div>
  );
};

export default Cards;
