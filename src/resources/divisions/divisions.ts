import { client } from '../../client/client';
import { NHLDivision } from '../../types';

export interface DivisionsConfig {
    expandConference?: boolean
    season?: string
}

async function getAll(config: DivisionsConfig = {}): Promise<NHLDivision[]> {
    return (
        await client.get<NHLDivision[]>('divisions', buildSearchParams(config))
    ).divisions
}

async function getById(id: number, config: DivisionsConfig = {}): Promise<NHLDivision> {
    return (
        await client.get<NHLDivision[]>(`divisions/${id}`, buildSearchParams(config))
    ).divisions[0]
}

function buildSearchParams(config: DivisionsConfig) {
    const params = new URLSearchParams()

    if (config.expandConference) {
        params.set('expand', 'division.conference')
    }

    if (config.season) {
        params.set('season', config.season)
    }

    return params.toString()
}

export const divisions = { getAll, getById }
