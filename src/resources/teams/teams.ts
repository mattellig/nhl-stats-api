import { client } from '../../client/client'
import { NHLRosterPlayer, NHLTeam, NHLTeamStats } from '../../types'

export interface TeamsConfig {
    expandConference?: boolean
    expandDivision?: boolean
    expandFranchise?: boolean
    expandPlayerInfo?: boolean
    includeRoster?: boolean
    includeSocials?: boolean
    includeStats?: boolean
    season?: string
}

export interface TeamsRosterConfig {
    fullRoster?: boolean
    expandPlayerInfo?: boolean
    includePlayerNames?: boolean
    includePlayerSocials?: boolean
    season?: string
}

export interface TeamsStatsConfig {
    expandTeam?: boolean
    season?: string
}

async function getAll(config: TeamsConfig = {}): Promise<NHLTeam[]> {
    return (
        await client.get<NHLTeam[]>('teams', buildSearchParams(config))
    ).teams
}

async function getById(id: number, config: TeamsConfig = {}): Promise<NHLTeam> {
    return (
        await client.get<NHLTeam[]>(`teams/${id}`, buildSearchParams(config))
    ).teams[0]
}

async function getRoster(id: number, config: TeamsRosterConfig = {}): Promise<NHLRosterPlayer[]> {
    const params = new URLSearchParams()

    if (config.expandPlayerInfo || config.includePlayerNames || config.includePlayerSocials) {
        const expand = ['roster.person']

        if (config.includePlayerNames) {
            expand.push('person.names')
        }

        if (config.includePlayerSocials) {
            expand.push('person.social')
        }

        params.set('expand', expand.join(''))
    }

    if (config.fullRoster) {
        params.set('rosterType', 'fullRoster')
    }

    if (config.season) {
        params.set('season', config.season)
    }

    return (
        await client.get<NHLRosterPlayer[]>(`teams/${id}/roster`, params.toString())
    ).roster
}

async function getStats(id: number, config: TeamsStatsConfig = {}): Promise<NHLTeamStats[]> {
    const params = new URLSearchParams()

    if (config.expandTeam) {
        params.set('expand', 'stats.team')
    }

    if (config.season) {
        params.set('season', config.season)
    }

    return (
        await client.get<NHLTeamStats[]>(`teams/${id}/stats`, params.toString())
    ).stats
}

function buildSearchParams(config: TeamsConfig) {
    const params = new URLSearchParams()

    if (config.expandConference
        || config.expandDivision
        || config.expandFranchise
        || config.expandPlayerInfo
        || config.includeRoster
        || config.includeSocials
        || config.includeStats
    ) {
        const expand = []

        if (config.expandConference) {
            expand.push('team.conference')
        }

        if (config.expandDivision) {
            expand.push('team.division')
        }

        if (config.expandFranchise) {
            expand.push('team.franchise')
        }

        if (config.expandPlayerInfo || config.includeRoster) {
            expand.push('team.roster')

            if (config.expandPlayerInfo) {
                expand.push('roster.person')
            }
        }

        if (config.includeSocials) {
            expand.push('team.social')
        }

        if (config.includeStats) {
            expand.push('team.stats')
        }

        if (expand.length) {
            params.set('expand', expand.join(','))
        }
    }

    if (config.season) {
        params.set('season', config.season)
    }

    return params.toString()
}

export const teams = {
    getAll,
    getById,
    getRoster,
    getStats,
}
