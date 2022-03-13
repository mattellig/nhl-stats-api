import { NHLFranchise } from '../../src';

export const mockFranchiseData: NHLFranchise[] = [
    {
        franchiseId: 1,
        firstSeasonId: 19171918,
        mostRecentTeamId: 8,
        teamName: 'Canadiens',
        locationName: 'Montréal',
        link: '/api/v1/franchises/1',
    },
    {
        franchiseId: 5,
        firstSeasonId: 19171918,
        mostRecentTeamId: 10,
        teamName: 'Maple Leafs',
        locationName: 'Toronto',
        link: '/api/v1/franchises/5',
    },
    {
        franchiseId: 6,
        firstSeasonId: 19241925,
        mostRecentTeamId: 6,
        teamName: 'Bruins',
        locationName: 'Boston',
        link: '/api/v1/franchises/6',
    },
]

function read(): NHLFranchise[] {
    return mockFranchiseData
}

function readById(id: number): NHLFranchise[] {
    return [mockFranchiseData.find((f) => f.franchiseId === id)]
}

export const franchisesDb = { read, readById }
