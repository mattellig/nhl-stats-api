import { mockDivisionData } from '../../../test/data'
import { validateExpanded } from '../../../test/utils/validateExpanded'
import { divisions } from './divisions'

describe('divisions', () => {
    describe('.getAll', () => {
        it('should resolve to an array of NHLDivisions', async () => {
            const results = await divisions.getAll()

            expect(results).toEqual(mockDivisionData)
        })

        it('should include expanded conference info if specified', async () => {
            const results = await divisions.getAll({ expandConference: true })

            results.forEach((d) => validateExpanded.conference(d.conference))
        })
    })

    describe('.getById', () => {
        it('should resolve to a single NHLDivision', async () => {
            const division = mockDivisionData[0]

            const result = await divisions.getById(division.id)

            expect(result).toEqual(division)
        })

        it('should include expanded conference info if specified', async () => {
            const divisionId = mockDivisionData[0].id

            const result = await divisions.getById(divisionId, { expandConference: true })

            validateExpanded.conference(result.conference)
        })
    })
})
