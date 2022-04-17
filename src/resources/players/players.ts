import { NHLPlayer } from '../../types'
import client from '../../client/client'

export type PlayerExpand =
    | 'person.currentTeam'
    | 'person.names'
    | 'person.social'

export interface PlayerOptions {
    expand?: PlayerExpand[]
    id: number
}

function getPlayer(options: PlayerOptions): Promise<NHLPlayer> {
    return client.get('people', options)
}

export default { getPlayer }
