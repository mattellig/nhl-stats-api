import { mockFranchiseData } from '../../../test/data'
import { franchises } from './franchises'

describe('franchises', () => {
    describe('.getAll', () => {
        it('should resolve to an array of NHLFranchises', () => {
            expect(franchises.getAll()).resolves.toEqual(mockFranchiseData)
        })
    })

    describe('.getById', () => {
        it('should resolve to a single NHLFranchise', () => {
            const franchise = mockFranchiseData[0]

            expect(franchises.getById(franchise.franchiseId)).resolves.toEqual(franchise)
        })
    })
})
