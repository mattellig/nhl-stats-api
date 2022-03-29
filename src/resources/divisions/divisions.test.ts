import { mockDivisionData } from '../../../test/data'
import { divisions } from './divisions'

describe('divisions', () => {
    describe('.getAll', () => {
        it('should resolve to an array of NHLDivisions', () => {
            expect(divisions.getAll()).resolves.toEqual(mockDivisionData)
        })
    })

    describe('.getById', () => {
        it('should resolve to a single NHLDivision', () => {
            const division = mockDivisionData[0]

            expect(divisions.getById(division.id)).resolves.toEqual(division)
        })
    })
})
