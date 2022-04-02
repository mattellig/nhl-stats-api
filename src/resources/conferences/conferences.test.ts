import { mockConferenceData } from '../../../test/data'
import { conferences } from './conferences'

describe('conferences', () => {
    describe('.getAll', () => {
        it('should resolve to an array of NHLConferences', async () => {
            const results = await conferences.getAll()

            expect(results).toEqual(mockConferenceData)
        })
    })

    describe('.getById', () => {
        it('should resolve to a single NHLConference', async () => {
            const conference = mockConferenceData[0]

            const result = await conferences.getById(conference.id)

            expect(result).toEqual(conference)
        })
    })
})
