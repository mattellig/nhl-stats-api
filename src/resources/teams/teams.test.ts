import validateExpanded from '../../../test/utils/validateExpanded';
import { NHLPlayer, NHLTeam } from '../../types';
import teams, { TeamExpand, TeamRosterExpand } from './teams';

const teamId = 10; // Toronto Maple Leafs

describe('getTeams', () => {
    const { getTeams } = teams;

    it('should resolve to an array of NHLTeams', async () => {
        const results = await getTeams();

        expect(results).toContainEqual(
            expect.objectContaining({
                id: expect.anything(),
                name: expect.anything(),
                link: expect.stringContaining('/api/v1/teams'),
            }),
        );
    });

    it('should resolve to a single NHLTeam when an ID is specified', async () => {
        const results = await getTeams({ id: teamId });

        expect(results).toEqual(
            expect.objectContaining({
                id: teamId,
                name: 'Toronto Maple Leafs',
                link: `/api/v1/teams/${teamId}`,
            }),
        );
    });

    it.each<[string, TeamExpand]>([
        ['conference', 'team.conference'],
        ['division', 'team.division'],
        ['franchise', 'team.franchise'],
    ])('should include expanded %s if specified', async (property, expand) => {
        const results = await getTeams({ id: teamId, expand: [expand] });

        const validator = validateExpanded[property];
        if (validator) {
            validator(results[property as keyof NHLTeam]);
        } else {
            throw new Error(`No validator found for expanded ${property}`);
        }
    });

    it.each<[keyof NHLTeam, TeamExpand]>([
        ['playoffInfo', 'team.playoffs'],
        ['record', 'team.record'],
        ['roster', 'team.roster'],
        ['social', 'team.social'],
        ['teamStats', 'team.stats'],
    ])('should include %s if specified', async (property, expand) => {
        const results = await getTeams({ id: teamId, expand: [expand] });

        expect(results).toEqual(
            expect.objectContaining({ [property]: expect.anything() }),
        );
    });

    it('should include the full roster if specified', async () => {
        const activeRosterResults = await getTeams({ id: teamId, expand: ['team.roster'] });
        const fullRosterResults = await getTeams({
            id: teamId,
            expand: ['team.roster'],
            rosterType: 'fullRoster',
        });

        expect(fullRosterResults.roster.roster.length)
            .toBeGreaterThan(activeRosterResults.roster.roster.length);
    });

    it('should include expanded player info in the roster if specified', async () => {
        const results = await getTeams({ id: teamId, expand: ['team.roster', 'roster.person'] });

        validateExpanded.player(results.roster.roster[0].person);
    });

    it.each<TeamExpand>([
        'roster.person',
        'person.names',
        'person.social',
    ])('should include the roster if %s expand is specified', async (expand) => {
        const results = await getTeams({ id: teamId, expand: [expand] });

        expect(results).toEqual(
            expect.objectContaining({ roster: expect.anything() }),
        );
    });

    it.each<[keyof NHLPlayer, TeamExpand]>([
        ['otherNames', 'person.names'],
        ['social', 'person.social'],
    ])('should include player %s in the roster if specified', async (property, expand) => {
        const results = await getTeams({
            id: teamId,
            expand: ['team.roster', 'roster.person', expand],
        });

        expect(results.roster.roster[0].person).toEqual(
            expect.objectContaining({ [property]: expect.anything() }),
        );
    });

    it.each<TeamExpand>([
        'person.names',
        'person.social',
    ])('should include expanded player info if %s expand is specified', async (expand) => {
        const results = await getTeams({ id: teamId, expand: ['team.roster', expand] });

        validateExpanded.player(results.roster.roster[0].person);
    });
});

describe('getTeamRoster', () => {
    const { getTeamRoster } = teams;

    it('should resolve to an array of NHLRosterPlayers', async () => {
        const results = await getTeamRoster({ id: teamId });

        expect(results).toContainEqual(
            expect.objectContaining({
                person: expect.anything(),
                jerseyNumber: expect.anything(),
                position: expect.anything(),
            }),
        );
    });

    it('should include the full roster if specified', async () => {
        const activeRosterResults = await getTeamRoster({ id: teamId });
        const fullRosterResults = await getTeamRoster({ id: teamId, rosterType: 'fullRoster' });

        expect(fullRosterResults.length).toBeGreaterThan(activeRosterResults.length);
    });

    it('should include expanded player info in the roster if specified', async () => {
        const results = await getTeamRoster({ id: teamId, expand: ['roster.person'] });

        validateExpanded.player(results[0].person);
    });

    it.each<[keyof NHLPlayer, TeamRosterExpand]>([
        ['otherNames', 'person.names'],
        ['social', 'person.social'],
    ])('should include player %s in the roster if specified', async (property, expand) => {
        const results = await getTeamRoster({ id: teamId, expand: ['roster.person', expand] });

        expect(results[0].person).toEqual(
            expect.objectContaining({ [property]: expect.anything() }),
        );
    });

    it.each<TeamRosterExpand>([
        'person.names',
        'person.social',
    ])('should include expanded player info if %s expand is specified', async (expand) => {
        const results = await getTeamRoster({ id: teamId, expand: [expand] });

        validateExpanded.player(results[0].person);
    });
});

describe('getTeamStats', () => {
    const { getTeamStats } = teams;

    it('should resolve to an NHLTeamStats array', async () => {
        const results = await getTeamStats({ id: teamId });

        expect(results).toHaveLength(2);
        expect(results).toContainEqual(
            expect.objectContaining({
                type: expect.anything(),
                splits: expect.anything(),
            }),
        );
    });

    it('should include expanded team info if specified', async () => {
        const results = await getTeamStats({ id: teamId, expand: ['stats.team'] });

        validateExpanded.team(results[0].splits[0].team);
    });
});
