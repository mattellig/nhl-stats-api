import { NHLSocialMedia, NHLTeam } from '../types'

export type NHLPosition =
    | { code: 'G'; name: 'Goalie'; type: 'Goalie'; abbreviation: 'G' }
    | { code: 'D'; name: 'Defenseman'; type: 'Defenseman'; abbreviation: 'D' }
    | { code: 'R'; name: 'Right Wing'; type: 'Forward'; abbreviation: 'RW' }
    | { code: 'L'; name: 'Left Wing'; type: 'Forward'; abbreviation: 'LW' }
    | { code: 'C'; name: 'Center'; type: 'Forward'; abbreviation: 'C' }
    | { code: 'N/A'; name: 'Unknown'; type: 'Unknown'; abbreviation: 'N/A' }
    | { code: 'HC'; name: 'Head Coach'; type: 'Coach'; abbreviation: 'Head Coach' }

export interface NHLPlayer {
    id: number
    fullName: string
    link: string

    // not always included/not in all resources that include players
    firstName?: string
    lastName?: string
    primaryNumber?: string
    birthDate?: string
    currentAge?: number
    birthCity?: string
    birthStateProvince?: string
    birthCountry?: string
    nationality?: string
    height?: string
    weight?: number
    active?: boolean
    alternateCaptain?: boolean
    captain?: boolean
    rookie?: boolean
    shootsCatches?: 'L' | 'R'
    rosterStatus?: 'Y' | 'N' | 'I'
    currentTeam?: NHLTeam
    primaryPosition?: NHLPosition
    social?: NHLSocialMedia
    otherNames?: {
        slug: string
        lastFirstName: string
        firstLastNameRoman: string
    }
}
