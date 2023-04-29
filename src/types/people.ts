import type { NHLBaseConferenceDivisionOrTeam, NHLPosition } from "./common";

export interface NHLPlayer {
  id: number;
  fullName: string;
  link: string;
  firstName: string;
  lastName: string;
  primaryNumber: string;
  birthDate: string;
  currentAge: number;
  birthCity: string;
  birthStateProvince: string;
  birthCountry: string;
  nationality: string;
  height: string;
  weight: number;
  active: boolean;
  alternateCaptain: boolean;
  captain: boolean;
  rookie: boolean;
  shootsCatches: string;
  rosterStatus: string;
  currentTeam: NHLBaseConferenceDivisionOrTeam;
  primaryPosition: NHLPosition;
}

// TODO: Add support + types for
// - onPaceRegularSeason
export type NHLPlayerStatsType =
  | "byDayOfWeek"
  | "byDayOfWeekPlayoffs"
  | "byMonth"
  | "byMonthPlayoffs"
  | "careerPlayoffs"
  | "careerRegularSeason"
  | "gameLog"
  | "goalsByGameSituation"
  | "goalsByGameSituationPlayoffs"
  | "homeAndAway"
  | "homeAndAwayPlayoffs"
  | "playoffGameLog"
  | "playoffStatRankings"
  | "regularSeasonStatRankings"
  | "statsSingleSeason"
  | "statsSingleSeasonPlayoffs"
  | "vsConference"
  | "vsConferencePlayoffs"
  | "vsDivision"
  | "vsDivisionPlayoffs"
  | "vsTeam"
  | "vsTeamPlayoffs"
  | "winLoss"
  | "winLossPlayoffs"
  | "yearByYear"
  | "yearByYearPlayoffs"
  | "yearByYearPlayoffsRank"
  | "yearByYearRank";

export interface NHLSkaterStats {
  timeOnIce: string;
  assists: number;
  goals: number;
  pim: number;
  shots: number;
  games: number;
  hits: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  powerPlayTimeOnIce: string;
  evenTimeOnIce: string;
  penaltyMinutes: string;
  shotPct: number;
  gameWinningGoals: number;
  overTimeGoals: number;
  shortHandedGoals: number;
  shortHandedPoints: number;
  shortHandedTimeOnIce: string;
  blocked: number;
  plusMinus: number;
  points: number;
  shifts: number;
  timeOnIcePerGame: string;
  evenTimeOnIcePerGame: string;
  shortHandedTimeOnIcePerGame: string;
  powerPlayTimeOnIcePerGame: string;

  // goalie stats that don't appear for skaters
  ot?: never;
  shutouts?: never;
  wins?: never;
  losses?: never;
  saves?: never;
  powerPlaySaves?: never;
  shortHandedSaves?: never;
  evenSaves?: never;
  shortHandedShots?: never;
  evenShots?: never;
  powerPlayShots?: never;
  savePercentage?: never;
  goalAgainstAverage?: never;
  gamesStarted?: never;
  shotsAgainst?: never;
  goalsAgainst?: never;
  powerPlaySavePercentage?: never;
  shortHandedSavePercentage?: never;
  evenStrengthSavePercentage?: never;
}

export interface NHLGoalieStats {
  timeOnIce: string;
  ot: number;
  shutouts: number;
  wins: number;
  losses: number;
  saves: number;
  powerPlaySaves: number;
  shortHandedSaves: number;
  evenSaves: number;
  shortHandedShots: number;
  evenShots: number;
  powerPlayShots: number;
  savePercentage: number;
  goalAgainstAverage: number;
  games: number;
  gamesStarted: number;
  shotsAgainst: number;
  goalsAgainst: number;
  timeOnIcePerGame: string;
  powerPlaySavePercentage: number;
  shortHandedSavePercentage: number;
  evenStrengthSavePercentage: number;

  // skater stats that don't appear for goalies
  assists?: never;
  goals?: never;
  pim?: never;
  shots?: never;
  hits?: never;
  powerPlayGoals?: never;
  powerPlayPoints?: never;
  powerPlayTimeOnIce?: never;
  evenTimeOnIce?: never;
  penaltyMinutes?: never;
  shotPct?: never;
  gameWinningGoals?: never;
  overTimeGoals?: never;
  shortHandedGoals?: never;
  shortHandedPoints?: never;
  shortHandedTimeOnIce?: never;
  blocked?: never;
  plusMinus?: never;
  points?: never;
  shifts?: never;
  evenTimeOnIcePerGame?: never;
  shortHandedTimeOnIcePerGame?: never;
  powerPlayTimeOnIcePerGame?: never;
}

interface PlayerStats<TSplits> {
  type: {
    displayName: string;
    gameType: null;
  };
  splits: TSplits[];
}

interface PlayerStatSplits {
  season: string;
  stat: NHLSkaterStats | NHLGoalieStats;
}

export type NHLPlayerStatsByDayOfWeek = PlayerStats<
  PlayerStatSplits & { dayOfWeek: number }
>;

export type NHLPlayerStatsByMonth = PlayerStats<
  PlayerStatSplits & { month: number }
>;

export type NHLPlayerCareerStats = PlayerStats<PlayerStatSplits>;

export type NHLPlayerStatsGameLog = PlayerStats<
  PlayerStatSplits & {
    team: NHLBaseConferenceDivisionOrTeam;
    opponent: NHLBaseConferenceDivisionOrTeam;
    date: string;
    isHome: boolean;
    isWin: boolean;
    isOT: boolean;
    game: {
      gamePk: number;
      link: string;
      content: {
        link: string;
      };
    };
  }
>;

export type NHLPlayerHomeAndAwayStats = PlayerStats<
  PlayerStatSplits & { isHome: boolean }
>;

export interface NHLPlayerSingleSeasonStats {
  type: {
    displayName: string;
    gameType: {
      id: string;
      description: string;
      postseason: boolean;
    };
  };
  splits: PlayerStatSplits[];
}

export type NHLPlayerStatsVsConference = PlayerStats<
  PlayerStatSplits & { opponentConference: NHLBaseConferenceDivisionOrTeam }
>;

export type NHLPlayerStatsVsDivision = PlayerStats<
  PlayerStatSplits & {
    opponentDivision: NHLBaseConferenceDivisionOrTeam;
    opponentConference: NHLBaseConferenceDivisionOrTeam;
  }
>;

export type NHLPlayerStatsVsTeam = PlayerStats<
  PlayerStatSplits & {
    opponent: NHLBaseConferenceDivisionOrTeam;
    opponentDivision: NHLBaseConferenceDivisionOrTeam;
    opponentConference: NHLBaseConferenceDivisionOrTeam;
  }
>;

export type NHLPlayerWinLossStats = PlayerStats<
  PlayerStatSplits & {
    isWin: boolean;
    isOT: boolean;
  }
>;

export type NHLPlayerGoalsByGameSituation = PlayerStats<{
  season: string;
  stat: {
    goalsInFirstPeriod: number;
    goalsInSecondPeriod: number;
    goalsInThirdPeriod: number;
    goalsInOvertime: number;
    gameWinningGoals: number;
    emptyNetGoals: number;
    shootOutGoals: number;
    shootOutShots: number;
    goalsTrailingByOne: number;
    goalsTrailingByTwo: number;
    goalsTrailingByThreePlus: number;
    goalsWhenTied: number;
    goalsLeadingByOne: number;
    goalsLeadingByTwo: number;
    goalsLeadingByThreePlus: number;
    penaltyGoals: number;
    penaltyShots: number;
  };
}>;

export type NHLPlayerYearByYearStats = PlayerStats<
  PlayerStatSplits & {
    team: NHLBaseConferenceDivisionOrTeam;
    league: NHLBaseConferenceDivisionOrTeam;
    sequenceNumber: number;
  }
>;

export interface NHLSkaterStatRankings {
  rankPowerPlayGoals: string;
  rankBlockedShots: string;
  rankAssists: string;
  rankShotPct: string;
  rankGoals: string;
  rankHits: string;
  rankPenaltyMinutes: string;
  rankShortHandedGoals: string;
  rankPlusMinus: string;
  rankShots: string;
  rankPoints: string;
  rankOvertimeGoals: string;
  rankGamesPlayed: string;

  // goalie ranks that don't appear for skaters
  shotsAgainst?: never;
  ot?: never;
  penaltyMinutes?: never;
  timeOnIce?: never;
  shutOuts?: never;
  saves?: never;
  losses?: never;
  goalsAgainst?: never;
  savePercentage?: never;
  games?: never;
  goalsAgainstAverage?: never;
  wins?: never;
}

export interface NHLGoalieStatRankings {
  shotsAgainst: string;
  ot: string;
  penaltyMinutes: string;
  timeOnIce: string;
  shutOuts: string;
  saves: string;
  losses: string;
  goalsAgainst: string;
  savePercentage: string;
  games: string;
  goalsAgainstAverage: string;
  wins: string;

  // skater ranks that don't appear for goalies
  rankPowerPlayGoals?: never;
  rankBlockedShots?: never;
  rankAssists?: never;
  rankShotPct?: never;
  rankGoals?: never;
  rankHits?: never;
  rankPenaltyMinutes?: never;
  rankShortHandedGoals?: never;
  rankPlusMinus?: never;
  rankShots?: never;
  rankPoints?: never;
  rankOvertimeGoals?: never;
  rankGamesPlayed?: never;
}

export type NHLPlayerStatRankings = PlayerStats<{
  season: string;
  stat: NHLSkaterStatRankings | NHLGoalieStatRankings;
}>;
