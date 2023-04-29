import type {
  NHLPlayer,
  NHLPlayerCareerStats,
  NHLPlayerGoalsByGameSituation,
  NHLPlayerHomeAndAwayStats,
  NHLPlayerStatRankings,
  NHLPlayerStatsByDayOfWeek,
  NHLPlayerStatsByMonth,
  NHLPlayerSingleSeasonStats,
  NHLPlayerStatsType,
  NHLPlayerStatsVsConference,
  NHLPlayerStatsVsDivision,
  NHLPlayerStatsVsTeam,
  NHLPlayerWinLossStats,
  NHLPlayerYearByYearStats,
  NHLPlayerStatsGameLog,
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
  byDayOfWeekPlayoffs: NHLPlayerStatsByDayOfWeek;
  byMonth: NHLPlayerStatsByMonth;
  byMonthPlayoffs: NHLPlayerStatsByMonth;
  careerPlayoffs: NHLPlayerCareerStats;
  careerRegularSeason: NHLPlayerCareerStats;
  gameLog: NHLPlayerStatsGameLog;
  goalsByGameSituation: NHLPlayerGoalsByGameSituation;
  goalsByGameSituationPlayoffs: NHLPlayerGoalsByGameSituation;
  homeAndAway: NHLPlayerHomeAndAwayStats;
  homeAndAwayPlayoffs: NHLPlayerHomeAndAwayStats;
  playoffGameLog: NHLPlayerStatsGameLog;
  playoffStatRankings: NHLPlayerStatRankings;
  regularSeasonStatRankings: NHLPlayerStatRankings;
  statsSingleSeason: NHLPlayerSingleSeasonStats;
  statsSingleSeasonPlayoffs: NHLPlayerSingleSeasonStats;
  vsConference: NHLPlayerStatsVsConference;
  vsConferencePlayoffs: NHLPlayerStatsVsConference;
  vsDivision: NHLPlayerStatsVsDivision;
  vsDivisionPlayoffs: NHLPlayerStatsVsDivision;
  vsTeam: NHLPlayerStatsVsTeam;
  vsTeamPlayoffs: NHLPlayerStatsVsTeam;
  winLoss: NHLPlayerWinLossStats;
  winLossPlayoffs: NHLPlayerWinLossStats;
  yearByYear: NHLPlayerYearByYearStats;
  yearByYearPlayoffs: NHLPlayerYearByYearStats;
  yearByYearPlayoffsRank: NHLPlayerStatRankings;
  yearByYearRank: NHLPlayerStatRankings;
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
