import { client } from '../../client/client'
import { NHLFranchise } from './franchises.types';

async function getAll(): Promise<NHLFranchise[]> {
    return (
        await client.get<NHLFranchise[]>('franchises')
    ).franchises
}

async function getById(id: number): Promise<NHLFranchise> {
    return (
        await client.get<NHLFranchise[]>(`franchises/${id}`)
    ).franchises[0]
}

export const franchises = { getAll, getById }
