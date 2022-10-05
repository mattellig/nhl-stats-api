export interface NHLFranchise {
    franchiseId: number;
    teamName: string;
    link: string;

    // not always included/not in all resources that include franchises
    firstSeasonId?: number;
    mostRecentTeamId?: number;
    locationName?: string;
}
