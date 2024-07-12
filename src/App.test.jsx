import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";
import axios from "axios";
import { mockData } from "./constants";
// import axios from "axios";

// jest.mock("axios");

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "John" },
    }),
  },
}));

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
  // axios.get.mockResolvedValueOnce(mockData);
  render(<App />);
  const apiCallBtn = screen.getByText("API call");
  await userEvent.click(apiCallBtn);
  const loader = screen.getByText(/loading/i);
  expect(loader).toBeInTheDocument();
  await waitFor(() => expect(loader).not.toBeInTheDocument());
});
