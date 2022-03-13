import { client } from '../../client/client'
import { NHLFranchise } from './franchises.types';

async function getAll(): Promise<NHLFranchise[]> {
    const data = await client.get<NHLFranchise[]>('franchises')

    return data.franchises
}

async function getById(id: number): Promise<NHLFranchise> {
    const result = await client.get<NHLFranchise[]>(`franchises/${id}`)

    return result.franchises[0]
}

export const franchises = { getAll, getById }
