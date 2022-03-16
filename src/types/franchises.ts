export interface NHLFranchise {
    franchiseId: number

    // not included in the teams api
    firstSeasonId?: number
    mostRecentTeamId?: number

    teamName: string

    // not included in the teams api
    locationName?: string

    link: string
}
