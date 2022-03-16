import { client } from '../../client/client'
import { NHLRosterPlayer, NHLTeam } from '../../types'

export interface TeamsConfig {
    expandConference?: boolean
    expandDivision?: boolean
    expandFranchise?: boolean
    includeSocials?: boolean
    season?: string
}

export interface TeamsRosterConfig {
    fullRoster?: boolean
    expandPlayerInfo?: boolean
    includePlayerNames?: boolean
    includePlayerSocials?: boolean
    season?: string
}

async function getAll(config: TeamsConfig = {}): Promise<NHLTeam[]> {
    return (
        await client.get<NHLTeam[]>(`teams?${buildSearchParams(config)}`)
    ).teams
}

async function getById(id: number, config: TeamsConfig = {}): Promise<NHLTeam> {
    return (
        await client.get<NHLTeam[]>(`teams/${id}?${buildSearchParams(config)}`)
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
        await client.get<NHLRosterPlayer[]>(`teams/${id}/roster?${params.toString()}`)
    ).roster
}

function buildSearchParams(config: TeamsConfig) {
    const params = new URLSearchParams()

    if (config.expandConference || config.expandDivision || config.expandFranchise || config.includeSocials) {
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

        if (config.includeSocials) {
            expand.push('team.social')
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
}
