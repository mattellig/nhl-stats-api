import client from '../../client/client'
import { NHLRosterPlayer, NHLTeam, NHLTeamStats } from '../../types'

export type RosterType = 'active' | 'fullRoster'

export type TeamExpand =
    | 'roster.person'
    | 'person.names'
    | 'person.social'
    | 'team.conference'
    | 'team.division'
    | 'team.franchise'
    | 'team.roster'
    | 'team.social'
    | 'team.stats'

interface BaseTeamOptions {
    expand?: TeamExpand[]
    rosterType?: RosterType
    season?: string
}

export interface SingleTeamOptions extends BaseTeamOptions {
    id: number
}

export interface MultiTeamOptions extends BaseTeamOptions {
    id?: never
}

export type TeamOptions = SingleTeamOptions | MultiTeamOptions

export type TeamRosterExpand =
    | 'roster.person'
    | 'person.names'
    | 'person.social'

export interface TeamRosterOptions {
    expand?: TeamRosterExpand[]
    id: number
    rosterType?: RosterType
    season?: string
}

export type StatsExpand = 'stats.team'

export interface TeamStatsOptions {
    expand?: StatsExpand[]
    id: number
    season?: string
}

function getTeams(options?: MultiTeamOptions): Promise<NHLTeam[]>
function getTeams(options: SingleTeamOptions): Promise<NHLTeam>

function getTeams(options: TeamOptions = {}): Promise<NHLTeam[] | NHLTeam> {
    let config = { ...options }

    if (config.expand) {
        const expand = [...options.expand]

        if (!expand.includes('team.roster')) {
            const propsRequiringRoster = ['roster.person', 'person.names', 'person.social']
            if (expand.some((e) => propsRequiringRoster.includes(e))) {
                expand.push('team.roster')
            }
        }

        config = {
            ...config,
            expand: validateRosterExpands(expand) as TeamExpand[],
        }
    }

    return client.get('teams', config)
}

function getTeamRoster(options: TeamRosterOptions): Promise<NHLRosterPlayer[]> {
    let config = { ...options }

    if (config.expand) {
        config = {
            ...config,
            expand: validateRosterExpands(config.expand) as TeamRosterExpand[],
        }
    }

    return client.get('teams', config, 'roster')
}

function getTeamStats(options: TeamStatsOptions): Promise<NHLTeamStats> {
    return client.get('teams', options, 'stats')
}

function validateRosterExpands(expand: TeamExpand[] | TeamRosterExpand[]) {
    const expandCopy = [...expand]

    if (!expandCopy.includes('roster.person')) {
        const propsRequiringPerson = ['person.names', 'person.social']
        if (expandCopy.some((e) => propsRequiringPerson.includes(e))) {
            expandCopy.push('roster.person')
        }
    }

    return expandCopy
}

export default { getTeamRoster, getTeams, getTeamStats }
