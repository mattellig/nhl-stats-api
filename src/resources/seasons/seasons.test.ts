import seasons from './seasons'

describe('getSeasons', () => {
    const { getSeasons } = seasons

    it('should resolve to an array of NHLSeasons', async () => {
        const results = await getSeasons()

        expect(results).toContainEqual(
            expect.objectContaining({
                seasonId: expect.anything(),
                regularSeasonStartDate: expect.anything(),
                regularSeasonEndDate: expect.anything(),
                seasonEndDate: expect.anything(),
                numberOfGames: expect.anything(),
                tiesInUse: expect.anything(),
                olympicsParticipation: expect.anything(),
                conferencesInUse: expect.anything(),
                divisionsInUse: expect.anything(),
                wildCardInUse: expect.anything(),
            }),
        )
    })

    it('should resolve to a single NHLSeason when an ID is specified', async () => {
        const seasonId = '20212022'

        const results = await getSeasons({ id: seasonId })

        expect(results).toEqual({
            regularSeasonStartDate: '2021-10-12',
            regularSeasonEndDate: '2022-05-01',
            seasonEndDate: '2022-06-29',
            numberOfGames: 82,
            tiesInUse: false,
            olympicsParticipation: true,
            conferencesInUse: true,
            divisionsInUse: true,
            wildCardInUse: true,
            seasonId,
        })
    })

    it('should resolve to a single NHLSeason when the current season is requested', async () => {
        const results = await getSeasons({ id: 'current' })

        expect(results).toEqual(
            expect.objectContaining({
                seasonId: expect.anything(),
                regularSeasonStartDate: expect.anything(),
                regularSeasonEndDate: expect.anything(),
                seasonEndDate: expect.anything(),
                numberOfGames: expect.anything(),
                tiesInUse: expect.anything(),
                olympicsParticipation: expect.anything(),
                conferencesInUse: expect.anything(),
                divisionsInUse: expect.anything(),
                wildCardInUse: expect.anything(),
            }),
        )
    })
})
