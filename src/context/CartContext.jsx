import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [val, setVal] = useState(0);
  const increment = () => {
    setVal((prev) => prev + 1);
  };
  const decrement = () => {
    setVal((prev) => prev - 1);
  };
  return (
    <CartContext.Provider value={{ val, increment, decrement }}>
      {children}
    </CartContext.Provider>
  );
};
