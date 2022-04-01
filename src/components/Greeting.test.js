import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greeting";

describe("<Greeting />", () => {
  it("should render Hello World as a text", () => {
    render(<Greeting />);

    const element = screen.getByText(/hello world/i);

    expect(element).toBeInTheDocument();
  });

  it("should render change text when button is not clicked", () => {
    render(<Greeting />);

    const paragraph = screen.getByText(/good to see you/i);

    expect(paragraph).toBeInTheDocument();
  });

  it("should change text when button is clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const paragraph = screen.getByText(/changed/i);

    expect(paragraph).toBeInTheDocument();
  });

  it("should does not render good to see you if the button be clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const paragraph = screen.queryByText(/good to see you/i);

    expect(paragraph).toBeNull();
  });
});
