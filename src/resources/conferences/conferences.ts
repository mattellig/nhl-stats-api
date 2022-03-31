import { client } from '../../client/client';
import { NHLConference } from '../../types';

async function getAll(): Promise<NHLConference[]> {
    return (
        await client.get<NHLConference[]>('conferences')
    ).conferences
}

async function getById(id: number): Promise<NHLConference> {
    return (
        await client.get<NHLConference[]>(`conferences/${id}`)
    ).conferences[0]
}

export const conferences = { getAll, getById }
