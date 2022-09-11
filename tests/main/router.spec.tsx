import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "@presentation/pages/home/home";

describe("Routes", () => {
  test("renders the right component with following path '/'", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Home />
      </MemoryRouter>
    );

    const HomeComponent = screen.getByTestId("home-container");

    expect(HomeComponent).toBeInTheDocument();
  });
});
