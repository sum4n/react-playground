import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "./App";
import { describe } from "vitest";

describe("App component", () => {
  it("renders magnificent monkeys", () => {
    // since screen does not have container property, we'll destructure render to obtain a container for this test
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});
