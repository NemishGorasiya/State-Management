import { fireEvent, render, screen } from "@testing-library/react";
import Card from "./Card";
import { CartContextProvider } from "../context/CartContext";
import Result from "./Result";

test("hello", () => {
  expect(1 + 2).toBe(3);
});

test("increment test", () => {
  render(
    <CartContextProvider>
      <Card price={10} />
      <Result />
    </CartContextProvider>
  );
  const plusBtn = screen.getByText("+");
  fireEvent.click(plusBtn);
  const result = screen.getByTestId("result");
  const val = Number(result.innerHTML);
  expect(val).toEqual(1);
});

test("decrement test", () => {
  render(
    <CartContextProvider>
      <Card price={10} />
      <Result />
    </CartContextProvider>
  );
  const minusBtn = screen.getByText("-");
  fireEvent.click(minusBtn);
  const result = screen.getByTestId("result");
  const val = Number(result.innerHTML);
  expect(val).toBe(-1);
});
