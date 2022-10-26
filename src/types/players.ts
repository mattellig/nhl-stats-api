import { NHLConference } from "./conferences";
import { NHLDivision } from "./divisions";
import { NHLSocialMedia, NHLStatsType } from "./shared";
import { NHLTeam } from "./teams";

export type NHLPosition =
  | { code: "G"; name: "Goalie"; type: "Goalie"; abbreviation: "G" }
  | { code: "D"; name: "Defenseman"; type: "Defenseman"; abbreviation: "D" }
  | { code: "R"; name: "Right Wing"; type: "Forward"; abbreviation: "RW" }
  | { code: "L"; name: "Left Wing"; type: "Forward"; abbreviation: "LW" }
  | { code: "C"; name: "Center"; type: "Forward"; abbreviation: "C" }
  | { code: "N/A"; name: "Unknown"; type: "Unknown"; abbreviation: "N/A" }
  | {
      code: "HC";
      name: "Head Coach";
      type: "Coach";
      abbreviation: "Head Coach";
    };

export interface NHLPlayerOtherNames {
  slug: string;
  lastFirstName: string;
  firstLastNameRoman: string;
}

export interface NHLPlayerGoalsByGameSituation {
  type: NHLStatsType;
  splits: [
    {
      season: string;
      stat: {
        goalsInFirstPeriod: number;
        goalsInSecondPeriod: number;
        goalsInThirdPeriod: number;
        goalsInOvertime: number;
        goalsTrailingByOne: number;
        goalsTrailingByTwo: number;
        goalsWhenTied: number;
        goalsLeadingByOne: number;
        goalsLeadingByTwo: number;
        goalsLeadingByThreePlus: number;
      };
    }
  ];
}

export interface NHLPlayerStatRankings {
  type: NHLStatsType;
  splits: {
    season: string;
    stat: {
      rankPowerPlayGoals?: string;
      rankBlockedShots?: string;
      rankAssists?: string;
      rankShotPct?: string;
      rankGoals?: string;
      rankHits?: string;
      rankPenaltyMinutes?: string;
      rankShortHandedGoals?: string;
      rankPlusMinus?: string;
      rankShots?: string;
      rankPoints?: string;
      rankOvertimeGoals?: string;
      rankGamesPlayed?: string;
      shotsAgainst?: string;
      ot?: string;
      penaltyMinutes?: string;
      timeOnIce?: string;
      shutOuts?: string;
      saves?: string;
      losses?: string;
      goalsAgainst?: string;
      savePercentage?: string;
      games?: string;
      goalsAgainstAverage?: string;
      wins?: string;
    };
  }[];
}

export interface NHLPlayerStats {
  type: NHLStatsType;
  splits: {
    season: string;
    stat: {
      games: number;

      // not always included
      timeOnIce?: string;
      assists?: number;
      goals?: number;
      pim?: number;
      penaltyMinutes?: string;
      plusMinus?: number;
      points?: number;
      shots?: number;
      hits?: number;
      powerPlayGoals?: number;
      powerPlayPoints?: number;
      powerPlayTimeOnIce?: string;
      evenTimeOnIce?: string;
      faceOffPct?: number;
      shotPct?: number;
      gameWinningGoals?: number;
      overTimeGoals?: number;
      shortHandedGoals?: number;
      shortHandedPoints?: number;
      shortHandedTimeOnIce?: string;
      blocked?: number;
      shifts?: number;
      timeOnIcePerGame?: string;
      evenTimeOnIcePerGame?: string;
      shortHandedTimeOnIcePerGame?: string;
      powerPlayTimeOnIcePerGame?: string;
      ot?: number;
      shutouts?: number;
      ties?: number;
      wins?: number;
      losses?: number;
      saves?: number;
      powerPlaySaves?: number;
      shortHandedSaves?: number;
      evenSaves?: number;
      shortHandedShots?: number;
      evenShots?: number;
      powerPlayShots?: number;
      savePercentage?: number;
      goalAgainstAverage?: number;
      gamesStarted?: number;
      shotsAgainst?: number;
      goalsAgainst?: number;
      powerPlaySavePercentage?: number;
      shortHandedSavePercentage?: number;
      evenStrengthSavePercentage?: number;
    };

    // not always included - depends on the stat type requested
    team?: NHLTeam;
    opponent?: NHLTeam;
    opponentDivision?: NHLDivision;
    opponentConference?: NHLConference;
    date?: string;
    dayOfWeek?: number;
    month?: number;
    isHome?: boolean;
    isWin?: boolean;
    isOT?: boolean;
    game?: {
      gamePk: number;
      link: string;
      content: {
        link: string;
      };
    };
    league?: {
      name: string;
      link: string;

      // some other leagues have no ID
      id?: number;
    };
    sequenceNumber?: number;
  }[];
}

export interface NHLPlayer {
  id: number;
  fullName: string;
  link: string;

  // not always included/not in all resources that include players
  firstName?: string;
  lastName?: string;
  primaryNumber?: string;
  birthDate?: string;
  currentAge?: number;
  birthCity?: string;
  birthStateProvince?: string;
  birthCountry?: string;
  nationality?: string;
  height?: string;
  weight?: number;
  active?: boolean;
  alternateCaptain?: boolean;
  captain?: boolean;
  rookie?: boolean;
  shootsCatches?: "L" | "R";
  rosterStatus?: "Y" | "N" | "I";
  currentTeam?: NHLTeam;
  primaryPosition?: NHLPosition;
  social?: NHLSocialMedia;
  otherNames?: NHLPlayerOtherNames;
}
