import { rest } from 'msw'
import { baseUrl } from '../../src/client/client'
import { franchisesDb } from '../data'

const url = `${baseUrl}/franchises`

export const franchisesHandlers = [
    // GET /franchises
    rest.get(url, (_req, res, ctx) => {
        try {
            const data = franchisesDb.read()
            return res(ctx.status(200), ctx.json({ franchises: data }))
        } catch (err) {
            return res(ctx.status(400), ctx.json({ message: err.message }))
        }
    }),

    // GET /franchises/{id}
    rest.get(`${url}/:id`, (req, res, ctx) => {
        const { id } = req.params;

        try {
            const data = franchisesDb.readById(Number(id))
            return res(ctx.status(200), ctx.json({ franchises: data }))
        } catch (err) {
            return res(ctx.status(400), ctx.json({ message: err.message }))
        }
    }),
]
