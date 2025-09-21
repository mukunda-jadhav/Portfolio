import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the home page with the main heading", async () => {
  render(<App />);
  const headingElement = await screen.findByRole("heading", {
    name: /mukund jadhav/i,
  });
  expect(headingElement).toBeInTheDocument();
});
