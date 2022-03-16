import { mockTeamData } from '../../../test/data'
import { teams } from './teams'

describe('teams', () => {
    describe('.getAll', () => {
        it('should resolve to an array of NHLTeams', () => {
            expect(teams.getAll()).resolves.toEqual(mockTeamData)
        })
    })

    describe('.getById', () => {
        it('should resolve to a single NHLTeam', () => {
            const team = mockTeamData[0]

            expect(teams.getById(team.id)).resolves.toEqual(team)
        })
    })

    describe('.getRoster', () => {
        it('should resolve to an array of NHLRosterPlayers', () => {
            const team = mockTeamData[0]

            expect(teams.getRoster(team.id)).resolves.toEqual(team.roster)
        })
    })
})
