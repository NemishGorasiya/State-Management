import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Result from "./components/Result";
import { CartContextProvider } from "./context/CartContext";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <CartContextProvider>
        <div className="app">
          <Cards />
          <Result />
        </div>
      </CartContextProvider>
      <button onClick={openModal}>open model</button>
      {isModalOpen && (
        <div data-testid="modal" id="modal">
          this is modal
          <button onClick={closeModal}>close</button>
        </div>
      )}
    </>
  );
}

export default App;
