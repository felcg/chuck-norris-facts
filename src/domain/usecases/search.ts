import { SearchResponse } from "domain/models"

export interface SearchFact {
  get: (query: string) => Promise<SearchResponse>
}
