import React, { useContext } from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FactsContext } from "@presentation/context/FactsContext";
import { FactContextInterface } from "@presentation/protocols";
import { Fact } from "@presentation/pages/home/components";
import { Pagination } from "@presentation/pages/home/components";
import { Result } from "@domain/models";

const fact = {
  categories: ["explicit"],
  created_at: "2020-01-05 13:42:18.823766",
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "RX3L0rCGRc6pSCzghxzL3g",
  updated_at: "2020-01-05 13:42:18.823766",
  url: "https://api.chucknorris.io/jokes/RX3L0rCGRc6pSCzghxzL3g",
  value:
    'Horses have long faces because they keep challenging Chuck Norris to "whos got the biggest dick" contests.',
};

const contextDefaultValues: FactContextInterface = {
  paginatedFacts: [],
  facts: [],
  totalFacts: 0,
  pageNumber: 1,
  factsPerPage: 5,
  loading: false,
  setPaginatedFacts: () => {},
  setFacts: () => {},
  setLoading: () => {},
  setTotalFacts: () => {},
  handlePrev: () => {},
  handleNext: () => {},
  handleFactsPerPage: () => {},
};

const TestingComponent = () => {
  const { paginatedFacts } = useContext(FactsContext);

  return (
    <>
      <Pagination />
      {paginatedFacts?.map((fact: Result) => {
        return <Fact fact={fact} key={fact.id} />;
      })}
    </>
  );
};

describe("FactsContext", () => {
  test("Should render fact quote", () => {
    render(
      <FactsContext.Provider
        value={{ ...contextDefaultValues, paginatedFacts: [fact] }}
      >
        <TestingComponent />
      </FactsContext.Provider>
    );

    const { getByText } = within(screen.getByTestId("fact__quote"));
    expect(
      getByText(
        'Horses have long faces because they keep challenging Chuck Norris to "whos got the biggest dick" contests.'
      )
    ).toBeInTheDocument();
  });
});
