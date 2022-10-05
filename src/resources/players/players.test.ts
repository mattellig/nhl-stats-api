import validateExpanded from '../../../test/utils/validateExpanded';
import { NHLPlayer } from '../../types';
import players, { PlayerExpand } from './players';

const playerId = 8478483; // Mitchell Marner

describe('getPlayer', () => {
    const { getPlayer } = players;

    it('should resolve to a single NHLPlayer', async () => {
        const results = await getPlayer({ id: playerId });

        expect(results).toEqual(
            expect.objectContaining({
                id: playerId,
                fullName: 'Mitchell Marner',
                link: `/api/v1/people/${playerId}`,
            }),
        );
    });

    it('should include expanded team info if specifed', async () => {
        const results = await getPlayer({ id: playerId, expand: ['person.currentTeam'] });

        validateExpanded.team(results.currentTeam);
    });

    it.each<[keyof NHLPlayer, PlayerExpand]>([
        ['otherNames', 'person.names'],
        ['social', 'person.social'],
    ])('should include %s if specified', async (property, expand) => {
        const results = await getPlayer({ id: playerId, expand: [expand] });

        expect(results).toEqual(
            expect.objectContaining({ [property]: expect.anything() }),
        );
    });
});

describe('getPlayerStats', () => {
    const { getPlayerStats } = players;

    it('should resolve to an array of NHLPlayerStats with the correct stat type', async () => {
        const results = await getPlayerStats({ id: playerId, stats: 'statsSingleSeason' });

        expect(results).toContainEqual(
            expect.objectContaining({
                type: expect.anything(),
                splits: expect.anything(),
            }),
        );
    });

    it('should resolve to an array of NHLPlayerStatRankings with the correct stat type', async () => {
        const results = await getPlayerStats({ id: playerId, stats: 'regularSeasonStatRankings' });

        expect(results).toContainEqual(
            expect.objectContaining({
                type: expect.anything(),
                splits: expect.anything(),
            }),
        );
    });

    it('should resolve to a single NHLPlayerGoalsByGameSituation with the correct stat type', async () => {
        const results = await getPlayerStats({ id: playerId, stats: 'goalsByGameSituation' });

        expect(results).toHaveLength(1);
        expect(results).toContainEqual(
            expect.objectContaining({
                type: expect.anything(),
                splits: expect.anything(),
            }),
        );
    });
});
