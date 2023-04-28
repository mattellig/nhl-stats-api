import type { BaseOptions, NHLDivision } from "../types";
import { fetchNHLStats } from "../utils";

export function getDivisions(options?: BaseOptions): Promise<NHLDivision[]> {
  return fetchNHLStats("divisions", options);
}

export function getDivisionById(
  id: number,
  options?: BaseOptions
): Promise<NHLDivision> {
  return fetchNHLStats("divisions", { ...options, id });
}
