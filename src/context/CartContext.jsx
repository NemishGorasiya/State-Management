import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [val, setVal] = useState("hello");
  const updateName = () => {
    setVal("New name");
  };
  console.log("cart context render");
  return (
    <CartContext.Provider value={{ val, updateName }}>
      {children}
    </CartContext.Provider>
  );
};
