import { rest } from 'msw'
import { baseUrl } from '../../src/client/client'
import { teamsDb } from '../data'

const url = `${baseUrl}/teams`

export const teamsHandlers = [
    // GET /teams
    rest.get(url, (req, res, ctx) => {
        const expand = req.url.searchParams.getAll('expand')

        try {
            const data = teamsDb.read(expand)
            return res(ctx.status(200), ctx.json({ teams: data }))
        } catch (err) {
            return res(ctx.status(400), ctx.json({ message: err.message }))
        }
    }),

    // GET /teams/{id}
    rest.get(`${url}/:id`, (req, res, ctx) => {
        const { id } = req.params

        const expand = req.url.searchParams.getAll('expand')

        try {
            const data = teamsDb.readById(Number(id), expand)
            return res(ctx.status(200), ctx.json({ teams: data }))
        } catch (err) {
            return res(ctx.status(400), ctx.json({ message: err.message }))
        }
    }),

    // GET /teams/{id}/roster
    rest.get(`${url}/:id/roster`, (req, res, ctx) => {
        const { id } = req.params

        try {
            const data = teamsDb.readRoster(Number(id))
            return res(ctx.status(200), ctx.json({ roster: data }))
        } catch (err) {
            return res(ctx.status(400), ctx.json({ message: err.message }))
        }
    }),

    // GET /teams/{id}/stats
    rest.get(`${url}/:id/stats`, (req, res, ctx) => {
        const { id } = req.params

        try {
            const data = teamsDb.readStats(Number(id))
            return res(ctx.status(200), ctx.json({ stats: data }))
        } catch (err) {
            return res(ctx.status(400), ctx.json({ message: err.message }))
        }
    }),
]
