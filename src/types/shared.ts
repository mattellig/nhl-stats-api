export interface NHLSocialMedia {
    twitter?: string[]
    facebook?: string[]
    instagram?: string[]
    vine?: string[]
    periscope?: string[]
    youtube?: string[]
    pinterest?: string[]
    googleplus?: string[]
    snapchat?: string[]
}

export type NHLRankingsStatTypeName =
    | 'yearByYearRank'
    | 'yearByYearPlayoffsRank'
    | 'regularSeasonStatRankings'
    | 'playoffStatRankings'

export type NHLGoalsByGameSituationStatTypeName =
    | 'goalsByGameSituation'
    | 'goalsByGameSituationPlayoffs'

export type NHLStatTypeName =
    | NHLRankingsStatTypeName
    | NHLGoalsByGameSituationStatTypeName
    | 'yearByYear'
    | 'yearByYearPlayoffs'
    | 'careerRegularSeason'
    | 'careerPlayoffs'
    | 'gameLog'
    | 'playoffGameLog'
    | 'vsTeam'
    | 'vsTeamPlayoffs'
    | 'vsDivision'
    | 'vsDivisionPlayoffs'
    | 'vsConference'
    | 'vsConferencePlayoffs'
    | 'byMonth'
    | 'byMonthPlayoffs'
    | 'byDayOfWeek'
    | 'byDayOfWeekPlayoffs'
    | 'homeAndAway'
    | 'homeAndAwayPlayoffs'
    | 'winLoss'
    | 'winLossPlayoffs'
    | 'onPaceRegularSeason'
    | 'statsSingleSeason'
    | 'statsSingleSeasonPlayoffs'

export interface NHLSingleSeasonStatType {
    displayName: 'statsSingleSeason'
    gameType: {
        id: 'R'
        description: 'Regular season'
        postseason: false
    }
}

export type NHLStatsType =
    | NHLSingleSeasonStatType
    | {
        displayName: 'statsSingleSeasonPlayoffs'
        gameType: {
            id: 'P'
            description: 'Playoffs'
            postseason: true
        }
    }
    | {
        displayName: Omit<NHLStatTypeName, 'statsSingleSeason' | 'statsSingleSeasonPlayoffs'>
        gameType: null
    }
