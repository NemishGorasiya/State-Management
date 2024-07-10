import "./App.css";
import Cards from "./components/Cards";
import Result from "./components/Result";
import { AuthContextProvider } from "./context/AuthContext";
import { CartContextProvider } from "./context/CartContext";

function App() {
  console.log("app render");
  return (
    <CartContextProvider>
      <AuthContextProvider>
        <div className="app">
          <Cards />
          <Result />
        </div>
      </AuthContextProvider>
    </CartContextProvider>
  );
}

export default App;
