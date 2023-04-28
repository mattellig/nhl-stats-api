import { NHLConference } from "./conferences";
import { NHLDivision } from "./divisions";
import { NHLFranchise } from "./franchises";
import { NHLPlayer, NHLPosition } from "./players";
import { NHLSingleSeasonStatType, NHLSocialMedia } from "./shared";
import { NHLVenue } from "./venues";

export interface NHLRosterPlayer {
  person: NHLPlayer;
  jerseyNumber: string;
  position: NHLPosition;
}

export interface NHLTeamStatsSingleSeason {
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
  penaltyKillPercentage: string;
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
}

export interface NHLTeamStatRankings {
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
}

export type NHLTeamStats = [
  {
    type: NHLSingleSeasonStatType;
    splits: [
      {
        stat: NHLTeamStatsSingleSeason;
        team: NHLTeam;
      }
    ];
  },
  {
    type: {
      displayName: "regularSeasonStatRankings";
      gameType: null;
    };
    splits: [
      {
        stat: NHLTeamStatRankings;
        team: NHLTeam;
      }
    ];
  }
];

export interface NHLTeam {
  id: number;
  name: string;
  link: string;

  // not always included/not in all resources that include teams
  venue?: NHLVenue;
  abbreviation?: string;
  teamName?: string;
  locationName?: string;
  firstYearOfPlay?: string;
  division?: NHLDivision;
  conference?: NHLConference;
  franchise?: NHLFranchise;
  teamStats?: [
    {
      type: NHLSingleSeasonStatType;
      splits: [
        {
          stat: NHLTeamStatsSingleSeason;
          team: NHLTeam;
        }
      ];
    },
    {
      stat: NHLTeamStatRankings;
      team: NHLTeam;
    }
  ];
  roster?: {
    roster: NHLRosterPlayer[];
    link: string;
  };
  social?: NHLSocialMedia;
  shortName?: string;
  record?: {
    team: NHLTeam;
    leagueRecord: {
      wins: number;
      losses: number;
      ties?: number;
      ot: number;
      type: string;
    };
    regulationWins?: number;
    goalsAgainst: number;
    goalsScored: number;
    points: number;
    divisionRank: string;
    divisionL10Rank: string;
    divisionRoadRank: string;
    divisionHomeRank: string;
    conferenceRank: string;
    conferenceL10Rank: string;
    conferenceRoadRank: string;
    conferenceHomeRank: string;
    leagueRank: string;
    leagueL10Rank: string;
    leagueRoadRank: string;
    leagueHomeRank: string;
    wildCardRank: string;
    row?: number;
    gamesPlayed: number;
    streak: {
      streakType: string;
      streakNumber: number;
      streakCode: string;
    };
    clinchedIndicator?: string;
    pointsPercentage: number;
    ppDivisionRank: string;
    ppConferenceRank: string;
    ppLeagueRank: string;
    lastUpdated: string;
  };
  playoffInfo?: {
    inPlayoffs: boolean;
    madePlayoffs: boolean;
    teamId: number;
  };
  officialSiteUrl?: string;
  franchiseId?: number;
  active?: boolean;
}
