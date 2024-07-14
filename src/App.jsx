import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Result from "./components/Result";
import { CartContextProvider } from "./context/CartContext";
import axios from "axios";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [list, setList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const callApi = async () => {
		try {
			setIsLoading(true);
			const res = await axios.get("https://dummyjson.com/products?limit=10");
			setList(res.data.products);
			setIsLoading(false);
		} catch (error) {
			console.log("error", error);
			setIsLoading(false);
		}
	};

	return (
		<>
			<CartContextProvider>
				<div className="app">
					<Cards />
					<Result />
				</div>
			</CartContextProvider>
			<button onClick={callApi}>API call</button>
			{isLoading ? (
				<h1>Loading....</h1>
			) : (
				<div data-testid="productsList">
					{list.map((item) => {
						return <div key={item.id}>{item.title}</div>;
					})}
				</div>
			)}

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
