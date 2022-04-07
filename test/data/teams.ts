import { NHLRosterPlayer, NHLSocialMedia, NHLTeam, NHLTeamStats } from '../../src/types'
import { mockConferenceData } from './conferences'
import { mockDivisionData } from './divisions'
import { mockFranchiseData } from './franchises'
import { mockPlayerData } from './shared'

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

const mockTeamRosterExpanded: NHLRosterPlayer[] = mockPlayerData.map((p) => ({
    person: p,
    jerseyNumber: p.primaryNumber,
    position: p.primaryPosition,
}))

export const mockTeamRoster: NHLRosterPlayer[] = mockTeamRosterExpanded.map((rp) => ({
    ...rp,
    person: {
        id: rp.person.id,
        fullName: rp.person.fullName,
        link: rp.person.link,
    },
}))

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
                    gamesPlayed: 68,
                    wins: 44,
                    losses: 19,
                    ot: 5,
                    pts: 93,
                    ptPctg: '68.4',
                    goalsPerGame: 3.765,
                    goalsAgainstPerGame: 3.029,
                    evGGARatio: 1.1169,
                    powerPlayPercentage: '29.8',
                    powerPlayGoals: 54.0,
                    powerPlayGoalsAgainst: 31.0,
                    powerPlayOpportunities: 181.0,
                    penaltyKillPercentage: '83.8',
                    shotsPerGame: 34.5441,
                    shotsAllowed: 30.5882,
                    winScoreFirst: 0.784,
                    winOppScoreFirst: 0.484,
                    winLeadFirstPer: 0.839,
                    winLeadSecondPer: 0.914,
                    winOutshootOpp: 0.605,
                    winOutshotByOpp: 0.708,
                    faceOffsTaken: 3958.0,
                    faceOffsWon: 2191.0,
                    faceOffsLost: 1767.0,
                    faceOffWinPercentage: '55.4',
                    shootingPctg: 10.9,
                    savePctg: 0.901,
                },
                team: {
                    id: 10,
                    name: 'Toronto Maple Leafs',
                    link: '/api/v1/teams/10',
                },
            },
            {
                stat: {
                    wins: '4th',
                    losses: '5th',
                    ot: '23rd',
                    pts: '5th',
                    ptPctg: '5th',
                    goalsPerGame: '2nd',
                    goalsAgainstPerGame: '17th',
                    evGGARatio: '12th',
                    powerPlayPercentage: '1st',
                    powerPlayGoals: '2nd',
                    powerPlayGoalsAgainst: '5th',
                    powerPlayOpportunities: '29th',
                    penaltyKillOpportunities: '11th',
                    penaltyKillPercentage: '4th',
                    shotsPerGame: '7th',
                    shotsAllowed: '10th',
                    winScoreFirst: '7th',
                    winOppScoreFirst: '6th',
                    winLeadFirstPer: '8th',
                    winLeadSecondPer: '9th',
                    winOutshootOpp: '11th',
                    winOutshotByOpp: '11th',
                    faceOffsTaken: '11th',
                    faceOffsWon: '2nd',
                    faceOffsLost: '2nd',
                    faceOffWinPercentage: '1st',
                    savePctRank: '21st',
                    shootingPctRank: '5th',
                },
                team: {
                    id: 10,
                    name: 'Toronto Maple Leafs',
                    link: '/api/v1/teams/10',
                },
            },
        ],
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
