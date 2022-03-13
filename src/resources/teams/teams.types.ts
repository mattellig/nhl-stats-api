import { NHLConference } from '../conferences/conferences.types'
import { NHLDivision } from '../divisions/divisions.types'
import { NHLFranchise } from '../franchises/franchises.types'
import { NHLPlayer, NHLPosition } from '../players/players.types'
import { NHLVenue } from '../venues/venues.types'

export interface NHLRosterPlayer {
    person: NHLPlayer
    jerseyNumber: string
    position: NHLPosition
}

export interface NHLSocialMedia {
    twitter?: string[]
    facebook?: string[]
    instagram?: string[]
    vine?: string[]
    periscope?: string[]
    youtube?: string[]
    pinterest?: string[]
    googleplus?: string[]
    snapchat?: string[]
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
