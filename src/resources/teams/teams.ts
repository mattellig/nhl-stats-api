import type { NHLRosterPlayer, NHLTeam, NHLTeamStats } from "../../types";
import { fetchNHLStats, type BaseOptions } from "../../utils";

export function getTeams(options?: BaseOptions): Promise<NHLTeam[]> {
  return fetchNHLStats("teams", options);
}

export function getTeamById(
  id: number,
  options?: BaseOptions
): Promise<NHLTeam> {
  return fetchNHLStats("teams", { ...options, id });
}

export function getTeamRoster(
  id: number,
  options?: BaseOptions & { season?: string }
): Promise<NHLRosterPlayer[]> {
  return fetchNHLStats("teams", { ...options, endpoint: "roster", id });
}

export function getTeamStats(
  id: number,
  options?: BaseOptions & { season?: string }
): Promise<NHLTeamStats> {
  return fetchNHLStats("teams", { ...options, endpoint: "stats", id });
}
