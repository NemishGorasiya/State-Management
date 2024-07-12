import { fireEvent, render, screen } from "@testing-library/react";
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
