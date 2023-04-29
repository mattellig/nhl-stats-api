import type { NHLDivision } from "../../types";
import { BaseOptions, fetchNHLStats } from "../../utils";

// unused but available `expand` values:
// - "division.conference"

export function getDivisions(options?: BaseOptions): Promise<NHLDivision[]> {
  return fetchNHLStats("divisions", options);
}

export function getDivisionById(
  id: number,
  options: BaseOptions = {}
): Promise<NHLDivision> {
  return fetchNHLStats("divisions", { ...options, id });
}
