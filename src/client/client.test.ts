import client from './client';

describe('client', () => {
    describe('get', () => {
        it('should resolve to an array of the expected type', async () => {
            const results = await client.get('conferences');

            expect(results).toContainEqual(
                expect.objectContaining({
                    id: expect.anything(),
                    name: expect.anything(),
                    link: expect.stringContaining('/api/v1/conferences'),
                }),
            );
        });

        it('should resolve to a single object if an id is specified', async () => {
            const conferenceId = 6;

            const results = await client.get('conferences', { id: conferenceId });

            expect(results).toEqual(
                expect.objectContaining({
                    id: conferenceId,
                    name: 'Eastern',
                    link: `/api/v1/conferences/${conferenceId}`,
                }),
            );
        });

        it('should reject with an Error when requesting an invalid resource', async () => {
            await expect(client.get('notAResource')).rejects
                .toThrow(new Error('Not Found'));
        });

        it('should reject with an Error with a badly formatted request', async () => {
            await expect(client.get('people')).rejects
                .toThrow(new Error('Must include a valid person ID'));
        });
    });
});
