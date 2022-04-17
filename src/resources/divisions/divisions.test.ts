import validateExpanded from '../../../test/utils/validateExpanded'
import divisions from './divisions'

const divisionId = 17 // Atlantic Division

describe('getDivisions', () => {
    const { getDivisions } = divisions

    it('should resolve to an array of NHLDivisions', async () => {
        const results = await getDivisions()

        expect(results).toContainEqual(
            expect.objectContaining({
                id: expect.anything(),
                name: expect.anything(),
                link: expect.stringContaining('/api/v1/divisions'),
            }),
        )
    })

    it('should resolve to a single NHLDivision when an ID is specified', async () => {
        const results = await getDivisions({ id: divisionId })

        expect(results).toEqual(
            expect.objectContaining({
                id: divisionId,
                name: 'Atlantic',
                link: `/api/v1/divisions/${divisionId}`,
            }),
        )
    })

    it('should include expanded conference info if specified', async () => {
        const results = await getDivisions({ id: divisionId, expand: ['division.conference'] })

        validateExpanded.conference(results.conference)
    })
})
