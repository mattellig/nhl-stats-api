import { NHLFranchise } from '../../src/types';

export const mockFranchiseData: NHLFranchise[] = [
    {
        franchiseId: 5,
        firstSeasonId: 19171918,
        mostRecentTeamId: 10,
        teamName: 'Maple Leafs',
        locationName: 'Toronto',
        link: '/api/v1/franchises/5',
    },
    {
        franchiseId: 21,
        firstSeasonId: 19721973,
        mostRecentTeamId: 20,
        teamName: 'Flames',
        locationName: 'Calgary',
        link: '/api/v1/franchises/21',
    },
    {
        franchiseId: 25,
        firstSeasonId: 19791980,
        mostRecentTeamId: 22,
        teamName: 'Oilers',
        locationName: 'Edmonton',
        link: '/api/v1/franchises/25',
    },
]

function read(): NHLFranchise[] {
    return mockFranchiseData
}

function readById(id: number): NHLFranchise[] {
    return [mockFranchiseData.find((f) => f.franchiseId === id)]
}

export const franchisesDb = { read, readById }
