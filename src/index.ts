import {
  conferences,
  divisions,
  franchises,
  people,
  seasons,
  teams,
} from "./resources";

export type {
  NHLBaseConferenceDivisionOrTeam,
  NHLConference,
  NHLDivision,
  NHLFranchise,
  NHLGoalieStatRankings,
  NHLGoalieStats,
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
  NHLPosition,
  NHLRosterPlayer,
  NHLSeason,
  NHLSkaterStatRankings,
  NHLSkaterStats,
  NHLTeam,
  NHLTeamRegularSeasonStatRankings,
  NHLTeamStats,
  NHLTeamStatsSingleSeason,
} from "./types";
export { NHLStatsError } from "./utils";

export const nhlStatsApi = {
  ...conferences,
  ...divisions,
  ...franchises,
  ...people,
  ...seasons,
  ...teams,
};
