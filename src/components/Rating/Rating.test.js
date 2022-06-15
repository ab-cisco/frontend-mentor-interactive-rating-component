import { render, screen } from "@testing-library/react";
import Rating from "./Rating";

test("renders Rating component", () => {
  render(<Rating />);
  const tittleElement = screen.getByText(/How did we do?/i);
  expect(tittleElement).toBeInTheDocument();
});
