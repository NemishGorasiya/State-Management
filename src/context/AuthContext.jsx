import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [val, setVal] = useState("hello");
  const [val2, setVal2] = useState("hello");
  const updateName = () => {
    setVal("New name");
  };
  console.log("auth context render");
  return (
    <AuthContext.Provider value={{ val, updateName, val2 }}>
      {children}
    </AuthContext.Provider>
  );
};
