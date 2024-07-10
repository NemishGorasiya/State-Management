import { useContext } from "react";
import "./Result.css";
import { CartContext } from "../context/CartContext";

const Result = () => {
  const { val, updateName } = useContext(CartContext);
  console.log("result render");
  return (
    <div className="result">
      {val} Result
      <button onClick={updateName}>call</button>
    </div>
  );
};

export default Result;
