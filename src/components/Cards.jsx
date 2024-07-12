import Card from "./Card";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      {[1, 2].map((price) => {
        return <Card key={price} price={price} />;
      })}
    </div>
  );
};

export default Cards;
