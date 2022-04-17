import validateExpanded from '../../../test/utils/validateExpanded'
import { NHLGoalsByGameSituationStatTypeName, NHLPlayer, NHLRankingsStatTypeName, NHLStatTypeName } from '../../types'
import players, { PlayerExpand } from './players'

const playerId = 8478483 // Mitchell Marner

describe('getPlayer', () => {
    const { getPlayer } = players

    it('should resolve to a single NHLPlayer', async () => {
        const results = await getPlayer({ id: playerId })

        expect(results).toEqual(
            expect.objectContaining({
                id: playerId,
                fullName: 'Mitchell Marner',
                link: `/api/v1/people/${playerId}`,
            }),
        )
    })

    it('should include expanded team info if specifed', async () => {
        const results = await getPlayer({ id: playerId, expand: ['person.currentTeam'] })

        validateExpanded.team(results.currentTeam)
    })

    it.each<[keyof NHLPlayer, PlayerExpand]>([
        ['otherNames', 'person.names'],
        ['social', 'person.social'],
    ])('should include %s if specified', async (property, expand) => {
        const results = await getPlayer({ id: playerId, expand: [expand] })

        expect(results).toEqual(
            expect.objectContaining({ [property]: expect.anything() }),
        )
    })
})

describe('getPlayerStats', () => {
    const { getPlayerStats } = players

    it.each<NHLStatTypeName>([
        'yearByYear',
        'yearByYearPlayoffs',
        'careerRegularSeason',
        'careerPlayoffs',
        'gameLog',
        'playoffGameLog',
        'vsTeam',
        'vsTeamPlayoffs',
        'vsDivision',
        'vsDivisionPlayoffs',
        'vsConference',
        'vsConferencePlayoffs',
        'byMonth',
        'byMonthPlayoffs',
        'byDayOfWeek',
        'byDayOfWeekPlayoffs',
        'homeAndAway',
        'homeAndAwayPlayoffs',
        'winLoss',
        'winLossPlayoffs',
        'onPaceRegularSeason',
        'statsSingleSeason',
        'statsSingleSeasonPlayoffs',
    ])('should resolve to an array of NHLPlayerStats with %s stat type', async (type) => {
        const results = await getPlayerStats({ id: playerId, stats: type })

        expect(results).toContainEqual(
            expect.objectContaining({
                type: expect.anything(),
                splits: expect.anything(),
            }),
        )
    })

    it.each<NHLRankingsStatTypeName>([
        'yearByYearRank',
        'yearByYearPlayoffsRank',
        'regularSeasonStatRankings',
        'playoffStatRankings',
    ])('should resolve to an array of NHLPlayerStatRankings with %s stat type', async (type) => {
        const results = await getPlayerStats({ id: playerId, stats: type })

        expect(results).toContainEqual(
            expect.objectContaining({
                type: expect.anything(),
                splits: expect.anything(),
            }),
        )
    })

    it.each<NHLGoalsByGameSituationStatTypeName>([
        'goalsByGameSituation',
        'goalsByGameSituationPlayoffs',
    ])('should resolve to a single NHLPlayerGoalsByGameSituation with %s stat type', async (type) => {
        const results = await getPlayerStats({ id: playerId, stats: type })

        expect(results).toHaveLength(1)
        expect(results).toContainEqual(
            expect.objectContaining({
                type: expect.anything(),
                splits: expect.anything(),
            }),
        )
    })
})
