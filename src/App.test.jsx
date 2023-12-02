// import { describe, it, expect } from "vitest";

// describe("something truthy and falsy", () => {
//   it("true to be true", () => {
//     expect(true).toBe(true);
//   });

//   it("false to be false", () => {
//     expect(false).toBe(false);
//   });
// });

import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders corrent heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});
