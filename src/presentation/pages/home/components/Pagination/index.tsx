import { FactsContext } from "@presentation/context";
import React, { useContext } from "react";
import "./pagination-styles.scss";

const Pagination: React.FC = () => {
  const {
    pageNumber,
    handlePrev,
    handleNext,
    handleFactsPerPage,
    paginatedFacts,
    factsPerPage,
  } = useContext(FactsContext);

  const disableNext = paginatedFacts && factsPerPage > paginatedFacts.length;
  const disablePrev = pageNumber === 1;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(event.target.value);
    handleFactsPerPage(value);
  };

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={handlePrev}
        disabled={disablePrev}
      >
        prev
      </button>
      <button
        className="pagination__button"
        onClick={handleNext}
        disabled={disableNext}
      >
        next
      </button>
      <select
        className="pagination__select"
        name="facts_per_page"
        id="facts_per_page"
        onChange={(event) => handleChange(event)}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default Pagination;
