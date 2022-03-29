import { NHLConference } from './conferences'
import { NHLDivision } from './divisions'
import { NHLFranchise } from './franchises'
import { NHLPlayer, NHLPosition } from './players'
import { NHLSocialMedia } from './shared'
import { NHLVenue } from './venues'

export interface NHLRosterPlayer {
    person: NHLPlayer
    jerseyNumber: string
    position: NHLPosition
}

export interface NHLTeamStatsSingleSeason {
    gamesPlayed: number
    wins: number
    losses: number
    ot: number
    pts: number
    ptPctg: string
    goalsPerGame: number
    goalsAgainstPerGame: number
    evGGARatio: number
    powerPlayPercentage: string
    powerPlayGoals: number
    powerPlayGoalsAgainst: number
    powerPlayOpportunities: number
    penaltyKillPercentage: string
    shotsPerGame: number
    shotsAllowed: number
    winScoreFirst: number
    winOppScoreFirst: number
    winLeadFirstPer: number
    winLeadSecondPer: number
    winOutshootOpp: number
    winOutshotByOpp: number
    faceOffsTaken: number
    faceOffsWon: number
    faceOffsLost: number
    faceOffWinPercentage: string
    shootingPctg: number
    savePctg: number
}

export interface NHLTeamStatRankings {
    wins: string
    losses: string
    ot: string
    pts: string
    ptPctg: string
    goalsPerGame: string
    evGGARatio: string
    powerPlayPercentage: string
    powerPlayGoals: string
    powerPlayGoalsAgainst: string
    powerPlayOpportunities: string
    penaltyKillPercentage: string
    shotsPerGame: string
    shotsAllowed: string
    winScoreFirst: string
    winOppScoreFirst: string
    winLeadFirstPer: string
    winLeadSecondPer: string
    winOutshootOpp: string
    winOutshotByOpp: string
    faceOffsTaken: string
    faceOffsWon: string
    faceOffsLost: string
    faceOffWinPercentage: string
    savePctRank: string
    shootingPctRank: string
}

export interface NHLTeamStats {
    type: {
        displayName: string
        gameType: null | {
            id: string
            description: string
            postseason: boolean
        }
    }
    splits: [
        {
            stat: NHLTeamStatsSingleSeason | NHLTeamStatRankings,
            team: NHLTeam
        },
    ]
}

export interface NHLTeam {
    id: number
    name: string
    link: string

    // not always included/not in all resources that include teams
    venue?: NHLVenue
    abbreviation?: string
    teamName?: string
    locationName?: string
    firstYearOfPlay?: string
    division?: NHLDivision
    conference?: NHLConference
    franchise?: NHLFranchise
    teamStats?: [NHLTeamStats]
    roster?: NHLRosterPlayer[]
    social?: NHLSocialMedia
    shortName?: string
    officialSiteUrl?: string
    franchiseId?: number
    active?: boolean
}
