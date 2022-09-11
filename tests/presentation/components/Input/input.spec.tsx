import { Input } from "@presentation/pages/home/components";
import { render, screen } from "@testing-library/react";
import React from "react";

const makeSut = (): void => {
  render(<Input />);
};

describe("Input Component", () => {
  test("Should render input component", () => {
    makeSut();
    const input = screen.getByTestId("input-wrapper");

    expect(input).toBeInTheDocument();
  });
});
