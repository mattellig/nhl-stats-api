import { mockTeamData } from '../../../test/data'
import { teams } from './teams.resource'

describe('teams', () => {
    describe('.getAll', () => {
        it('should resolve to an array of NHLTeams', () => {
            expect(teams.getAll()).resolves.toEqual(mockTeamData)
        })
    })

    describe('.getById', () => {
        it('should resolve to a single NHLTeam', () => {
            const mockTeam = mockTeamData[0]

            expect(teams.getById(mockTeam.id)).resolves.toEqual(mockTeam)
        })
    })
})
