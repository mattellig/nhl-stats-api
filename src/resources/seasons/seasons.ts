import type { NHLSeason } from "../../types";
import { fetchNHLStats, type BaseOptions } from "../../utils";

export function getSeasons(options?: BaseOptions): Promise<NHLSeason[]> {
  return fetchNHLStats("seasons", options);
}

export function getSeasonById(
  id: "current" | string | number,
  options?: BaseOptions
): Promise<NHLSeason> {
  return fetchNHLStats("seasons", { ...options, id });
}
