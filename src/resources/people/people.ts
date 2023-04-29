import type {
  NHLPlayer,
  NHLPlayerGoalsByGameSituation,
  NHLPlayerHomeAndAwayStats,
  NHLPlayerRegularSeasonStatRankings,
  NHLPlayerStatsByDayOfWeek,
  NHLPlayerStatsByMonth,
  NHLPlayerStatsSingleSeason,
  NHLPlayerStatsType,
  NHLPlayerStatsVsConference,
  NHLPlayerStatsVsDivision,
  NHLPlayerStatsVsTeam,
  NHLPlayerWinLossStats,
} from "../../types";
import { fetchNHLStats, type BaseOptions } from "../../utils";

export function getPlayerById(
  id: number,
  options?: BaseOptions
): Promise<NHLPlayer> {
  return fetchNHLStats("people", { ...options, id });
}

export interface NHLPlayerStatsReturnType {
  byDayOfWeek: NHLPlayerStatsByDayOfWeek;
  byMonth: NHLPlayerStatsByMonth;
  goalsByGameSituation: NHLPlayerGoalsByGameSituation;
  homeAndAway: NHLPlayerHomeAndAwayStats;
  regularSeasonStatRankings: NHLPlayerRegularSeasonStatRankings;
  statsSingleSeason: NHLPlayerStatsSingleSeason;
  vsConference: NHLPlayerStatsVsConference;
  vsDivision: NHLPlayerStatsVsDivision;
  vsTeam: NHLPlayerStatsVsTeam;
  winLoss: NHLPlayerWinLossStats;
}

export function getPlayerStats<TType extends NHLPlayerStatsType>(
  id: number,
  type: TType,
  options?: BaseOptions & { season?: string }
): Promise<NHLPlayerStatsReturnType[TType][]> {
  return fetchNHLStats("people", {
    ...options,
    endpoint: "stats",
    stats: type,
    id,
  });
}
