import { rest } from 'msw';
import { baseUrl } from '../../src/client/client';
import { playersDb } from '../data';

const url = `${baseUrl}/people`

export const playersHandlers = [
    // GET /people/{id}
    rest.get(`${url}/:id`, (req, res, ctx) => {
        const { id } = req.params

        const expand = req.url.searchParams.getAll('expand')

        try {
            const data = playersDb.readById(Number(id), expand)
            return res(ctx.status(200), ctx.json({ people: data }))
        } catch (err) {
            return res(ctx.status(400), ctx.json({ message: err.message }))
        }
    }),
]
