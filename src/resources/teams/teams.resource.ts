import { client } from '../../client/client'
import { NHLTeam } from './teams.types'

async function getAll(): Promise<NHLTeam[]> {
    const result = await client.get<NHLTeam[]>('teams')

    return result.teams
}

async function getById(id: number): Promise<NHLTeam> {
    const result = await client.get<NHLTeam[]>(`teams/${id}`)

    return result.teams[0]
}

export const teams = { getAll, getById }
