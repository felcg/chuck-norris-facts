import { Result } from "./result-model"

export type SearchResponse = {
  total: number
  result: Result[]
}