import { client } from '../../client/client';
import { NHLPlayer } from '../../types';

export interface PlayersConfig {
    expandTeam?: boolean
    includeNames?: boolean
    includeSocials?: boolean
}

async function getById(id: number, config: PlayersConfig = {}): Promise<NHLPlayer> {
    const params = new URLSearchParams()

    if (config.expandTeam || config.includeNames || config.includeSocials) {
        const expand = []

        if (config.expandTeam) {
            expand.push('person.currentTeam')
        }

        if (config.includeNames) {
            expand.push('person.names')
        }

        if (config.includeSocials) {
            expand.push('person.social')
        }

        if (expand.length) {
            params.set('expand', expand.join(','))
        }
    }

    return (
        await client.get<NHLPlayer[]>(`people/${id}`, params.toString())
    ).people[0]
}

export const players = { getById }
