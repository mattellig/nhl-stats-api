import { NHLConference } from './conferences'

export interface NHLDivision {
    // some divisions have no id or names (on teams, for example)
    id?: number
    name?: string
    nameShort?: string

    link: string

    // some divisions have no abbreviation (on teams, for example)
    abbreviation?: string

    // not included in the teams api
    conference?: NHLConference
    active?: boolean
}
