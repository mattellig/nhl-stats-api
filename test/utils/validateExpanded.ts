import { NHLConference, NHLDivision, NHLFranchise } from '../../src/types'

function validateExpandedConference(conference: NHLConference) {
    expect(conference).toHaveProperty('abbreviation')
    expect(conference).toHaveProperty('shortName')
    expect(conference).toHaveProperty('active')
}

function validateExpandedDivision(division: NHLDivision) {
    expect(division).toHaveProperty('conference')
    expect(division).toHaveProperty('active')
}

function validateExpandedFranchise(franchise: NHLFranchise) {
    expect(franchise).toHaveProperty('firstSeasonId')
    expect(franchise).toHaveProperty('mostRecentTeamId')
    expect(franchise).toHaveProperty('locationName')
}

export const validateExpanded = {
    conference: validateExpandedConference,
    division: validateExpandedDivision,
    franchise: validateExpandedFranchise,
}
