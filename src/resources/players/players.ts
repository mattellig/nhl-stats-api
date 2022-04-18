import { NHLGoalsByGameSituationStatTypeName, NHLPlayer, NHLPlayerGoalsByGameSituation, NHLPlayerStatRankings, NHLPlayerStats, NHLRankingsStatTypeName, NHLStatTypeName } from '../../types'
import client from '../../client/client'

export type PlayerExpand =
    | 'person.currentTeam'
    | 'person.names'
    | 'person.social'

export interface PlayerOptions {
    expand?: PlayerExpand[]
    id: number
}

interface BasePlayerStatsOptions {
    id: number
    season?: string
}

export interface PlayerStatsOptions extends BasePlayerStatsOptions {
    stats: Omit<NHLStatTypeName, NHLRankingsStatTypeName | NHLGoalsByGameSituationStatTypeName>
}

export interface PlayerStatRankingsOptions extends BasePlayerStatsOptions {
    stats: NHLRankingsStatTypeName
}

export interface PlayerGoalsByGameSituationOptions extends BasePlayerStatsOptions {
    stats: NHLGoalsByGameSituationStatTypeName
}

type AllPlayerStatOptions =
    | PlayerStatsOptions
    | PlayerStatRankingsOptions
    | PlayerGoalsByGameSituationOptions

type PlayerStatsReturnType =
    | NHLPlayerStats
    | NHLPlayerStatRankings
    | NHLPlayerGoalsByGameSituation

function getPlayer(options: PlayerOptions): Promise<NHLPlayer> {
    return client.get('people', options)
}

function getPlayerStats(options: PlayerStatsOptions): Promise<NHLPlayerStats>
function getPlayerStats(options: PlayerStatRankingsOptions): Promise<NHLPlayerStatRankings>
function getPlayerStats(
    options: PlayerGoalsByGameSituationOptions,
): Promise<NHLPlayerGoalsByGameSituation>

function getPlayerStats(options: AllPlayerStatOptions): Promise<PlayerStatsReturnType> {
    return client.get('people', options, 'stats')
}

export default { getPlayer, getPlayerStats }
