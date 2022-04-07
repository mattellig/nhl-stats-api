import { mockPlayerData } from '../../../test/data'
import { validateExpanded } from '../../../test/utils/validateExpanded'
import { players } from './players'

const testPlayer = mockPlayerData[0]

describe('players', () => {
    describe('.getById', () => {
        it('should resolve to a single NHLPlayer', async () => {
            const result = await players.getById(testPlayer.id)

            expect(result).toEqual(testPlayer)
        })

        it('should include expanded team info if specified', async () => {
            const result = await players.getById(testPlayer.id, { expandTeam: true })

            validateExpanded.team(result.currentTeam)
        })

        it('should include other names if specified', async () => {
            const result = await players.getById(testPlayer.id, { includeNames: true })

            expect(result).toHaveProperty('otherNames')
        })

        it('should include social media if specified', async () => {
            const result = await players.getById(testPlayer.id, { includeSocials: true })

            expect(result).toHaveProperty('social')
        })
    })
})
