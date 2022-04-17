import conferences from './conferences'

describe('getConferences', () => {
    const { getConferences } = conferences

    it('should resolve to an array of NHLConferences', async () => {
        const results = await getConferences()

        expect(results).toContainEqual(
            expect.objectContaining({
                id: expect.anything(),
                name: expect.anything(),
                link: expect.stringContaining('/api/v1/conferences'),
            }),
        )
    })

    it('should resolve to a single NHLConference when an ID is specified', async () => {
        const conferenceId = 6 // Eastern Conference

        const results = await getConferences({ id: conferenceId })

        expect(results).toEqual(
            expect.objectContaining({
                id: conferenceId,
                name: 'Eastern',
                link: `/api/v1/conferences/${conferenceId}`,
            }),
        )
    })
})
