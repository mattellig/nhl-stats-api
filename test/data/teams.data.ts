import { NHLTeam } from '../../src'

export const mockTeamData: NHLTeam[] = [
    {
        id: 10,
        name: 'Toronto Maple Leafs',
        link: '/api/v1/teams/10',
        venue: {
            name: 'Scotiabank Arena',
            link: '/api/v1/venues/null',
            city: 'Toronto',
            timeZone: {
                id: 'America/Toronto',
                offset: -5,
                tz: 'EST',
            },
        },
        abbreviation: 'TOR',
        teamName: 'Maple Leafs',
        locationName: 'Toronto',
        firstYearOfPlay: '1917',
        division: {
            id: 17,
            name: 'Atlantic',
            nameShort: 'ATL',
            link: '/api/v1/divisions/17',
            abbreviation: 'A',
        },
        conference: {
            id: 6,
            name: 'Eastern',
            link: '/api/v1/conferences/6',
        },
        franchise: {
            franchiseId: 5,
            teamName: 'Maple Leafs',
            link: '/api/v1/franchises/5',
        },
        shortName: 'Toronto',
        officialSiteUrl: 'http://www.mapleleafs.com/',
        franchiseId: 5,
        active: true,
    },
    {
        id: 20,
        name: 'Calgary Flames',
        link: 'api/v1/teams/20',
        venue: {
            id: 5075,
            name: 'Scotiabank Saddledome',
            link: '/api/v1/venues/5075',
            city: 'Calgary',
            timeZone: {
                id: 'America/Denver',
                offset: -7,
                tz: 'MST',
            },
        },
        abbreviation: 'CGY',
        teamName: 'Flames',
        locationName: 'Calgary',
        firstYearOfPlay: '1980',
        division: {
            id: 15,
            name: 'Pacific',
            nameShort: 'PAC',
            link: '/api/v1/divisions/15',
            abbreviation: 'P',
        },
        conference: {
            id: 5,
            name: 'Western',
            link: '/api/v1/conferences/5',
        },
        franchise: {
            franchiseId: 21,
            teamName: 'Flames',
            link: '/api/v1/franchises/21',
        },
        shortName: 'Calgary',
        officialSiteUrl: 'http://www.calgaryflames.com/',
        franchiseId: 21,
        active: true,
    },
    {
        id: 22,
        name: 'Edmonton Oilers',
        link: '/api/v1/teams/22',
        venue: {
            id: 5100,
            name: 'Rogers Place',
            link: '/api/v1/venues/5100',
            city: 'Edmonton',
            timeZone: {
                id: 'America/Edmonton',
                offset: -7,
                tz: 'MST',
            },
        },
        abbreviation: 'EDM',
        teamName: 'Oilers',
        locationName: 'Edmonton',
        firstYearOfPlay: '1979',
        division: {
            id: 15,
            name: 'Pacific',
            nameShort: 'PAC',
            link: '/api/v1/divisions/15',
            abbreviation: 'P',
        },
        conference: {
            id: 5,
            name: 'Western',
            link: '/api/v1/conferences/5',
        },
        franchise: {
            franchiseId: 25,
            teamName: 'Oilers',
            link: '/api/v1/franchises/25',
        },
        shortName: 'Edmonton',
        officialSiteUrl: 'http://www.edmontonoilers.com/',
        franchiseId: 25,
        active: true,
    },
];

function read(): NHLTeam[] {
    return mockTeamData
}

function readById(id: number): NHLTeam[] {
    return [mockTeamData.find((t) => t.id === id)]
}

export const teamsDb = { read, readById }
