import { Result } from "@domain/models";

export interface RandomFact {
  get: () => Promise<Result>
}