import { rest } from 'msw'
import { baseUrl } from '../../src/client/client'
import { conferencesDb } from '../data'

const url = `${baseUrl}/conferences`

export const conferencesHandlers = [
    // GET /conferences
    rest.get(url, (_req, res, ctx) => {
        try {
            const data = conferencesDb.read()
            return res(ctx.status(200), ctx.json({ conferences: data }))
        } catch (err) {
            return res(ctx.status(400), ctx.json({ message: err.message }))
        }
    }),

    // GET /conferences/{id}
    rest.get(`${url}/:id`, (req, res, ctx) => {
        const { id } = req.params;

        try {
            const data = conferencesDb.readById(Number(id))
            return res(ctx.status(200), ctx.json({ conferences: data }))
        } catch (err) {
            return res(ctx.status(400), ctx.json({ message: err.message }))
        }
    }),
]
