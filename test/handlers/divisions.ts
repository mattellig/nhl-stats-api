import { rest } from 'msw'
import { baseUrl } from '../../src/client/client'
import { divisionsDb } from '../data'

const url = `${baseUrl}/divisions`

export const divisionsHandlers = [
    // GET /divisions
    rest.get(url, (req, res, ctx) => {
        const expand = req.url.searchParams.getAll('expand')

        try {
            const data = divisionsDb.read(expand)
            return res(ctx.status(200), ctx.json({ divisions: data }))
        } catch (err) {
            return res(ctx.status(400), ctx.json({ message: err.message }))
        }
    }),

    // GET /divisions/{id}
    rest.get(`${url}/:id`, (req, res, ctx) => {
        const { id } = req.params;

        const expand = req.url.searchParams.getAll('expand')

        try {
            const data = divisionsDb.readById(Number(id), expand)
            return res(ctx.status(200), ctx.json({ divisions: data }))
        } catch (err) {
            return res(ctx.status(400), ctx.json({ message: err.message }))
        }
    }),
]
