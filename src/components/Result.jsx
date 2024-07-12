import { useContext } from "react";
import "./Result.css";
import { CartContext } from "../context/CartContext";

const Result = () => {
  const { val, updateName } = useContext(CartContext);
  return (
    <div className="result">
      <span data-testid="result">{val}</span> Result
      <button onClick={updateName}>call</button>
    </div>
  );
};

export default Result;
