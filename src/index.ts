import { conferences, divisions, franchises, people } from "./resources";

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
  NHLSkaterStatRankings,
  NHLSkaterStats,
} from "./types";
export { NHLStatsError } from "./utils";

export const nhlStatsApi = {
  ...conferences,
  ...divisions,
  ...franchises,
  ...people,
};
