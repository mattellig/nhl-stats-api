import client from '../../client/client'
import { NHLConference } from '../../types'

export interface ConferenceOptions {
    id: number
}

function getConferences(options?: never): Promise<NHLConference[]>
function getConferences(options?: ConferenceOptions): Promise<NHLConference>

function getConferences(options?: ConferenceOptions): Promise<NHLConference[] | NHLConference> {
    return client.get('conferences', options)
}

export default { getConferences }
