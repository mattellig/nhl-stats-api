import { NHLRosterPlayer, NHLSocialMedia, NHLTeam, NHLTeamStats } from '../../src/types'
import { mockConferenceData } from './conferences.data'
import { mockDivisionData } from './divisions.data'
import { mockFranchiseData } from './franchises.data'

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
]

export const mockTeamRoster: NHLRosterPlayer[] = [
    {
        person: {
            id: 8475789,
            fullName: 'Jack Campbell',
            link: '/api/v1/people/8475789',
        },
        jerseyNumber: '36',
        position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
        },
    },
    {
        person: {
            id: 8475166,
            fullName: 'John Tavares',
            link: '/api/v1/people/8475166',
        },
        jerseyNumber: '91',
        position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
        },
    },
    {
        person: {
            id: 8478483,
            fullName: 'Mitchell Marner',
            link: '/api/v1/people/8478483',
        },
        jerseyNumber: '16',
        position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
        },
    },
]

const mockTeamRosterExpanded: NHLRosterPlayer[] = [
    {
        person: {
            id: 8475789,
            fullName: 'Jack Campbell',
            link: '/api/v1/people/8475789',
            firstName: 'Jack',
            lastName: 'Campbell',
            primaryNumber: '36',
            birthDate: '1992-01-09',
            currentAge: 30,
            birthCity: 'Port Huron',
            birthStateProvince: 'MI',
            birthCountry: 'USA',
            nationality: 'USA',
            height: '6\' 3"',
            weight: 207,
            active: true,
            alternateCaptain: false,
            captain: false,
            rookie: false,
            shootsCatches: 'L',
            rosterStatus: 'I',
            currentTeam: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
            },
            primaryPosition: {
                code: 'G',
                name: 'Goalie',
                type: 'Goalie',
                abbreviation: 'G',
            },
        },
        jerseyNumber: '36',
        position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
        },
    },
    {
        person: {
            id: 8475166,
            fullName: 'John Tavares',
            link: '/api/v1/people/8475166',
            firstName: 'John',
            lastName: 'Tavares',
            primaryNumber: '91',
            birthDate: '1990-09-20',
            currentAge: 31,
            birthCity: 'Mississauga',
            birthStateProvince: 'ON',
            birthCountry: 'CAN',
            nationality: 'CAN',
            height: '6\' 1"',
            weight: 211,
            active: true,
            alternateCaptain: false,
            captain: true,
            rookie: false,
            shootsCatches: 'L',
            rosterStatus: 'Y',
            currentTeam: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
            },
            primaryPosition: {
                code: 'C',
                name: 'Center',
                type: 'Forward',
                abbreviation: 'C',
            },
        },
        jerseyNumber: '91',
        position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
        },
    },
    {
        person: {
            id: 8478483,
            fullName: 'Mitchell Marner',
            link: '/api/v1/people/8478483',
            firstName: 'Mitchell',
            lastName: 'Marner',
            primaryNumber: '16',
            birthDate: '1997-05-05',
            currentAge: 24,
            birthCity: 'Markham',
            birthStateProvince: 'ON',
            birthCountry: 'CAN',
            nationality: 'CAN',
            height: '6\' 0"',
            weight: 172,
            active: true,
            alternateCaptain: true,
            captain: false,
            rookie: false,
            shootsCatches: 'R',
            rosterStatus: 'Y',
            currentTeam: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
            },
            primaryPosition: {
                code: 'R',
                name: 'Right Wing',
                type: 'Forward',
                abbreviation: 'RW',
            },
        },
        jerseyNumber: '16',
        position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
        },
    },
]

export const mockTeamStats: [NHLTeamStats] = [
    {
        type: {
            displayName: 'statsSingleSeason',
            gameType: {
                id: 'R',
                description: 'Regular season',
                postseason: false,
            },
        },
        splits: [
            {
                stat: {
                    gamesPlayed: 65,
                    wins: 41,
                    losses: 19,
                    ot: 5,
                    pts: 87,
                    ptPctg: '66.9',
                    goalsPerGame: 3.646,
                    goalsAgainstPerGame: 3.015,
                    evGGARatio: 1.1027,
                    powerPlayPercentage: '29.2',
                    powerPlayGoals: 50.0,
                    powerPlayGoalsAgainst: 29.0,
                    powerPlayOpportunities: 171.0,
                    penaltyKillPercentage: '84.2',
                    shotsPerGame: 34.6308,
                    shotsAllowed: 30.6923,
                    winScoreFirst: 0.778,
                    winOppScoreFirst: 0.448,
                    winLeadFirstPer: 0.833,
                    winLeadSecondPer: 0.909,
                    winOutshootOpp: 0.585,
                    winOutshotByOpp: 0.696,
                    faceOffsTaken: 3779.0,
                    faceOffsWon: 2094.0,
                    faceOffsLost: 1685.0,
                    faceOffWinPercentage: '55.4',
                    shootingPctg: 10.5,
                    savePctg: 0.902,
                },
                team: {
                    id: 10,
                    name: 'Toronto Maple Leafs',
                    link: '/api/v1/teams/10',
                },
            },
        ]
    },
]

const mockTeamSocials: NHLSocialMedia = {
    twitter: ['MapleLeafs'],
    facebook: ['torontomapleleafs'],
    instagram: ['MapleLeafs'],
    vine: ['MapleLeafs'],
    periscope: ['MapleLeafs'],
    youtube: ['torontomapleleafs'],
    pinterest: ['mapleleafs'],
    googleplus: ['+TorontoMapleLeafs'],
    snapchat: ['tmlsnaps'],
}

function read(expand: string[]): NHLTeam[] {
    return mockTeamData.map((t) => expandTeamData(t, expand))
}

function readById(id: number, expand: string[]): NHLTeam[] {
    const team = expandTeamData(mockTeamData.find((t) => t.id === id), expand)
    return [team]
}

function readRoster(_id: number): NHLRosterPlayer[] {
    // ignoring id - only keeping one array of mock players for simplicity
    return mockTeamRoster
}

function readStats(_id: number): NHLTeamStats[] {
    // ignoring id - only keeping one array of mock stats for simplicity
    return mockTeamStats
}

function expandTeamData(team: NHLTeam, expand: string[]) {
    const expandedTeam = {
        ...team,
        conference: expand.includes('team.conference')
            ? mockConferenceData.find((c) => c.id === team.conference.id)
            : team.conference,
        division: expand.includes('team.division')
            ? mockDivisionData.find((d) => d.id === team.division.id)
            : team.division,
        franchise: expand.includes('team.franchise')
            ? mockFranchiseData.find((f) => f.franchiseId === team.franchiseId)
            : team.franchise,
        social: expand.includes('team.social')
            ? mockTeamSocials
            : team.social,
        teamStats: expand.includes('team.stats')
            ? mockTeamStats
            : team.teamStats,
    }

    if (expand.includes('team.roster')) {
        expandedTeam.roster = expand.includes('roster.person')
            ? mockTeamRosterExpanded
            : mockTeamRoster
    }

    return expandedTeam
}

export const teamsDb = {
    read,
    readById,
    readRoster,
    readStats,
}
