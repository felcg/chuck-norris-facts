import { Result } from "@domain/models";
import { Dispatch, SetStateAction } from "react";

export type FactContextInterface = {
  facts: Result[] | undefined;
  paginatedFacts: Result[] | undefined;
  pageNumber: number;
  totalFacts: number;
  factsPerPage: number;
  loading: boolean;
  setPaginatedFacts: Dispatch<SetStateAction<Result[] | undefined>>;
  setFacts: Dispatch<SetStateAction<Result[] | undefined>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setTotalFacts: Dispatch<SetStateAction<number>>;
  setPageNumber: Dispatch<SetStateAction<number>>;
  handlePrev: () => void;
  handleNext: () => void;
  handleFactsPerPage: (number: number) => void;
}