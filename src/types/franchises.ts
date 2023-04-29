export interface NHLFranchise {
  franchiseId: number;
  firstSeasonId: number;
  lastSeasonId?: number;
  mostRecentTeamId: number;
  teamName: string;
  locationName: string;
  link: string;
}
