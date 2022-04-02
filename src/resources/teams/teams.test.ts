import { mockTeamData, mockTeamRoster, mockTeamStats } from '../../../test/data'
import { validateExpanded } from '../../../test/utils/validateExpanded'
import { teams } from './teams'

const testTeam = mockTeamData[0]

describe('teams', () => {
    describe('.getAll', () => {
        it('should resolve to an array of NHLTeams', async () => {
            const results = await teams.getAll()

            expect(results).toEqual(mockTeamData)
        })

        it('should include expanded conference info if specified', async () => {
            const results = await teams.getAll({ expandConference: true })

            results.forEach((t) => validateExpanded.conference(t.conference))
        })

        it('should include expanded division info if specified', async () => {
            const results = await teams.getAll({ expandDivision: true })

            results.forEach((t) => validateExpanded.division(t.division))
        })

        it('should include expanded franchise info if specified', async () => {
            const results = await teams.getAll({ expandFranchise: true })

            results.forEach((t) => validateExpanded.franchise(t.franchise))
        })

        it('should include roster players if specified', async () => {
            const results = await teams.getAll({ includeRoster: true })

            results.forEach((t) => expect(t).toHaveProperty('roster'))
        })

        it('should include social media if specified', async () => {
            const results = await teams.getAll({ includeSocials: true })

            results.forEach((t) => expect(t).toHaveProperty('social'))
        })

        it('should include stats if specified', async () => {
            const results = await teams.getAll({ includeStats: true })

            results.forEach((t) => expect(t).toHaveProperty('teamStats'))
        })
    })

    describe('.getById', () => {
        it('should resolve to a single NHLTeam', async () => {
            const result = await teams.getById(testTeam.id)

            expect(result).toEqual(testTeam)
        })

        it('should include expanded conference info if specified', async () => {
            const result = await teams.getById(testTeam.id, { expandConference: true })

            validateExpanded.conference(result.conference)
        })

        it('should include expanded division info if specified', async () => {
            const result = await teams.getById(testTeam.id, { expandDivision: true })

            validateExpanded.division(result.division)
        })

        it('should include expanded franchise info if specified', async () => {
            const result = await teams.getById(testTeam.id, { expandFranchise: true })

            validateExpanded.franchise(result.franchise)
        })

        it('should include roster players if specified', async () => {
            const result = await teams.getById(testTeam.id, { includeRoster: true })

            expect(result).toHaveProperty('roster')
        })

        it('should include social media if specified', async () => {
            const result = await teams.getById(testTeam.id, { includeSocials: true })

            expect(result).toHaveProperty('social')
        })

        it('should include stats if specified', async () => {
            const result = await teams.getById(testTeam.id, { includeStats: true })

            expect(result).toHaveProperty('teamStats')
        })
    })

    describe('.getRoster', () => {
        it('should resolve to an array of NHLRosterPlayers', () => {
            const teamId = mockTeamData[0].id

            expect(teams.getRoster(teamId)).resolves.toEqual(mockTeamRoster)
        })
    })

    describe('.getStats', () => {
        it('should resolve to an NHLTeamStats', () => {
            const teamId = mockTeamData[0].id

            expect(teams.getStats(teamId)).resolves.toEqual(mockTeamStats)
        })
    })
})
