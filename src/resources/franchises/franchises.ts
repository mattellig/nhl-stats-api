import type { NHLFranchise } from "../../types";
import { BaseOptions, fetchNHLStats } from "../../utils";

export function getFranchises(options?: BaseOptions): Promise<NHLFranchise[]> {
  return fetchNHLStats("franchises", options);
}

export function getFranchiseById(
  id: number,
  options: BaseOptions = {}
): Promise<NHLFranchise> {
  return fetchNHLStats("franchises", { ...options, id });
}
