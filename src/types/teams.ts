import { NHLConference } from './conferences'
import { NHLDivision } from './divisions'
import { NHLFranchise } from './franchises'
import { NHLPlayer, NHLPosition } from './players'
import { NHLSocialMedia } from './shared'
import { NHLVenue } from './venues'

export interface NHLRosterPlayer {
    person: NHLPlayer
    jerseyNumber: string
    position: NHLPosition
}

export interface NHLTeam {
    id: number
    name: string
    link: string

    // not always included/not in all resources that include teams
    venue?: NHLVenue
    abbreviation?: string
    teamName?: string
    locationName?: string
    firstYearOfPlay?: string
    division?: NHLDivision
    conference?: NHLConference
    franchise?: NHLFranchise
    roster?: NHLRosterPlayer[]
    social?: NHLSocialMedia
    shortName?: string
    officialSiteUrl?: string
    franchiseId?: number
    active?: boolean
}
