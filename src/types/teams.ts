import type { NHLBaseConferenceDivisionOrTeam, NHLPosition } from "./common";

export interface NHLTeam extends NHLBaseConferenceDivisionOrTeam {
  venue: {
    name: string;
    link: string;
    city: string;
    timeZone: {
      id: string;
      offset: number;
      tz: string;
    };
  };
  abbreviation: string;
  teamName: string;
  locationName: string;
  firstYearOfPlay: string;
  division: NHLBaseConferenceDivisionOrTeam & {
    nameShort: string;
    abbreviation: string;
  };
  conference: NHLBaseConferenceDivisionOrTeam;
  franchise: {
    franchiseId: number;
    teamName: string;
    link: string;
  };
  shortName: string;
  officialSiteUrl: string;
  franchiseId: number;
  active: boolean;
}

export interface NHLRosterPlayer {
  person: {
    id: number;
    fullName: string;
    link: string;
  };
  jerseyNumber: string;
  position: NHLPosition;
}

export interface NHLTeamStatsSingleSeason {
  type: {
    displayName: string;
    gameType: {
      id: string;
      description: string;
      postseason: boolean;
    };
  };
  splits: {
    stat: {
      gamesPlayed: number;
      wins: number;
      losses: number;
      ot: number;
      pts: number;
      ptPctg: string;
      goalsPerGame: number;
      goalsAgainstPerGame: number;
      evGGARatio: number;
      powerPlayPercentage: string;
      powerPlayGoals: number;
      powerPlayGoalsAgainst: number;
      powerPlayOpportunities: number;
      penaltyKillPercentage: number;
      shotsPerGame: number;
      shotsAllowed: number;
      winScoreFirst: number;
      winOppScoreFirst: number;
      winLeadFirstPer: number;
      winLeadSecondPer: number;
      winOutshootOpp: number;
      winOutshotByOpp: number;
      faceOffsTaken: number;
      faceOffsWon: number;
      faceOffsLost: number;
      faceOffWinPercentage: string;
      shootingPctg: number;
      savePctg: number;
    };
    team: NHLBaseConferenceDivisionOrTeam;
  }[];
}

export interface NHLTeamRegularSeasonStatRankings {
  type: {
    displayName: string;
    gameType: null;
  };
  splits: {
    stat: {
      wins: string;
      losses: string;
      ot: string;
      pts: string;
      ptPctg: string;
      goalsPerGame: string;
      goalsAgainstPerGame: string;
      evGGARatio: string;
      powerPlayPercentage: string;
      powerPlayGoals: string;
      powerPlayGoalsAgainst: string;
      powerPlayOpportunities: string;
      penaltyKillOpportunities: string;
      penaltyKillPercentage: string;
      shotsPerGame: string;
      shotsAllowed: string;
      winScoreFirst: string;
      winOppScoreFirst: string;
      winLeadFirstPer: string;
      winLeadSecondPer: string;
      winOutshootOpp: string;
      winOutshotByOpp: string;
      faceOffsTaken: string;
      faceOffsWon: string;
      faceOffsLost: string;
      faceOffWinPercentage: string;
      savePctRank: string;
      shootingPctRank: string;
    };
    team: NHLBaseConferenceDivisionOrTeam;
  }[];
}

export type NHLTeamStats = [
  NHLTeamStatsSingleSeason,
  NHLTeamRegularSeasonStatRankings
];
