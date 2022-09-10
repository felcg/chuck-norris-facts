import { createContext, useState, useEffect } from "react";
import { Result } from "domain/models";
import { FactContextInterface, Props } from "presentation/protocols";

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

export const FactsContext =
  createContext<FactContextInterface>(contextDefaultValues);

const FactsProvider: React.FC<Props> = ({ children }) => {
  const [facts, setFacts] = useState<Result[]>();
  const [totalFacts, setTotalFacts] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [paginatedFacts, setPaginatedFacts] = useState<Result[]>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [factsPerPage, setFactsPerPage] = useState<number>(5);

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
    setPageNumber(pageNumber + 1);
  };
  const handleFactsPerPage = (number: number) => {
    setFactsPerPage(number);
  };

  useEffect(() => {
    const startIndex = pageNumber * factsPerPage - factsPerPage;
    const endIndex = startIndex + factsPerPage;
    const paginated = facts?.slice(startIndex, endIndex);
    setPaginatedFacts(paginated);
  }, [pageNumber, factsPerPage, facts]);

  return (
    <FactsContext.Provider
      value={{
        facts,
        setFacts,
        paginatedFacts,
        setPaginatedFacts,
        pageNumber,
        factsPerPage,
        handlePrev,
        handleNext,
        handleFactsPerPage,
        loading,
        setLoading,
        totalFacts,
        setTotalFacts,
      }}
    >
      {children}
    </FactsContext.Provider>
  );
};

export default FactsProvider;
