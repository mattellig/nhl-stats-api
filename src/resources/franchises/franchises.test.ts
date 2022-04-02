import { mockFranchiseData } from '../../../test/data'
import { franchises } from './franchises'

describe('franchises', () => {
    describe('.getAll', () => {
        it('should resolve to an array of NHLFranchises', async () => {
            const results = await franchises.getAll()

            expect(results).toEqual(mockFranchiseData)
        })
    })

    describe('.getById', () => {
        it('should resolve to a single NHLFranchise', async () => {
            const franchise = mockFranchiseData[0]

            const result = await franchises.getById(franchise.franchiseId)

            expect(result).toEqual(franchise)
        })
    })
})
