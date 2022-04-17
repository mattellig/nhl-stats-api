import client from '../../client/client'
import { NHLFranchise } from '../../types'

export interface FranchiseOptions {
    id: number
}

function getFranchises(options?: never): Promise<NHLFranchise[]>
function getFranchises(options: FranchiseOptions): Promise<NHLFranchise>

function getFranchises(options?: FranchiseOptions): Promise<NHLFranchise[] | NHLFranchise> {
    return client.get('franchises', options)
}

export default { getFranchises }
