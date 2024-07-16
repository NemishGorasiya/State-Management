import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("modal test", () => {
  render(<App />);

  const openModalBtn = screen.getByText("open model");
  fireEvent.click(openModalBtn);

  const modal = screen.getByTestId("modal");

  expect(modal).toBeInTheDocument();

  const closeModalBtn = screen.getByText("close");
  fireEvent.click(closeModalBtn);

  expect(modal).not.toBeInTheDocument();
});

test("during API call", async () => {
  render(<App />);
  const apiCallBtn = screen.getByText("API call");
  fireEvent.click(apiCallBtn);
  const loader = await screen.findByTestId("loader");
  expect(loader).toBeInTheDocument();
  await waitFor(() => {
    expect(loader).not.toBeInTheDocument();
  });
  const productsList = screen.getByTestId("productsList");
  expect(productsList).toBeInTheDocument();
});
