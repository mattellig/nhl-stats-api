import { NHLConference } from '../conferences/conferences.types'
import { NHLDivision } from '../divisions/divisions.types'
import { NHLFranchise } from '../franchises/franchises.types'
import { NHLVenue } from '../venues/venues.types'

export interface NHLTeam {
    id: number
    name: string
    link: string

    // some inactive teams have no venue info
    venue?: NHLVenue

    abbreviation: string
    teamName: string
    locationName: string
    firstYearOfPlay: string
    division: NHLDivision
    conference: NHLConference
    franchise: NHLFranchise
    shortName: string

    // some inactive teams have no website
    officialSiteUrl?: string

    franchiseId: number
    active: boolean
}
