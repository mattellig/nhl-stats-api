import { rest, server } from '../../test/server'
import { baseUrl, client } from './client'

describe('client', () => {
    describe('.get', () => {
        it('should resolve to the expected type', () => {
            const mockData = { resource: 'test' }

            server.use(
                rest.get(`${baseUrl}/fake`, (_req, res, ctx) => {
                    return res(ctx.status(200), ctx.json(mockData))
                })
            )

            expect(client.get('fake')).resolves.toEqual(mockData)
        })

        it('should reject with an Error when a request fails', async () => {
            server.use(
                rest.get(`${baseUrl}/fake`, (_req, res, ctx) => {
                    return res(ctx.status(400), ctx.json({ message: 'error' }))
                })
            )

            try {
                await client.get('fake')
            } catch (err) {
                expect(err).toBeInstanceOf(Error)
                expect(err.message).toMatch('error')
            }
        })
    })
})
