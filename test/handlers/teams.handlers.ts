import { rest } from 'msw'
import { baseUrl } from '../../src/client/client'
import { teamsDb } from '../data'

const url = `${baseUrl}/teams`

export const teamsHandlers = [
    // GET /teams
    rest.get(url, (_req, res, ctx) => {
        try {
            const data = teamsDb.read()
            return res(ctx.status(200), ctx.json({ teams: data }))
        } catch (err) {
            return res(ctx.status(400), ctx.json({ message: err.message }))
        }
    }),

    // GET /teams/{id}
    rest.get(`${url}/:id`, (req, res, ctx) => {
        const { id } = req.params;

        try {
            const data = teamsDb.readById(Number(id))
            return res(ctx.status(200), ctx.json({ teams: data }))
        } catch (err) {
            return res(ctx.status(400), ctx.json({ message: err.message }))
        }
    }),
]
