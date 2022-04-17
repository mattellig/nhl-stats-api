import franchises from './franchises'

describe('getFranchises', () => {
    const { getFranchises } = franchises

    it('should resolve to an array of NHLFranchises', async () => {
        const results = await getFranchises()

        expect(results).toContainEqual(
            expect.objectContaining({
                franchiseId: expect.anything(),
                teamName: expect.anything(),
                link: expect.stringContaining('/api/v1/franchises'),
            }),
        )
    })

    it('should resolve to a single NHLFranchise when an ID is specified', async () => {
        const franchiseId = 1 // Canadiens Franchise

        const results = await getFranchises({ id: franchiseId })

        expect(results).toEqual(
            expect.objectContaining({
                teamName: 'Canadiens',
                link: `/api/v1/franchises/${franchiseId}`,
                franchiseId,
            }),
        )
    })
})
