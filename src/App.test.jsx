import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";

// test("modal test", () => {
//   render(<App />);

//   const openModalBtn = screen.getByText("open model");
//   fireEvent.click(openModalBtn);

//   const modal = screen.getByTestId("modal");

//   expect(modal).toBeInTheDocument();

//   const closeModalBtn = screen.getByText("close");
//   fireEvent.click(closeModalBtn);

//   expect(modal).not.toBeInTheDocument();
// });

test("during API call", async () => {
	render(<App />);
	const apiCallBtn = screen.getByText("API call");
	await userEvent.click(apiCallBtn);
	const loader = screen.getByText(/loading/i);
	expect(loader).toBeInTheDocument();
	await waitFor(() => {
		expect(loader).not.toBeInTheDocument();
	});
	const productsList = screen.getByTestId("productsList");
	console.log("productsList", productsList.innerHTML);
	expect(productsList).toBeInTheDocument();
});
