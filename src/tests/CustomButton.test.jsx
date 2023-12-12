import { describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomButton from "../components/CustomButton";

describe("CustomButton", () => {
  it("should render a button with text 'Click Me'", () => {
    render(<CustomButton onClick={() => {}} />);

    const button = screen.getByRole("button", { name: "Click Me" });

    expect(button).toBeInTheDocument();
  });

  it("should call onClick function when clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<CustomButton onClick={onClick} />);

    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("should not call the onClick function when it isn't clicked", async () => {
    const onClick = vi.fn();
    render(<CustomButton onClick={onClick} />);

    expect(onClick).not.toHaveBeenCalled();
  });
});
