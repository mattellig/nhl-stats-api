import { mockConferenceData } from '../../../test/data'
import { conferences } from './conferences'

describe('conferences', () => {
    describe('.getAll', () => {
        it('should resolve to an array of NHLConferences', () => {
            expect(conferences.getAll()).resolves.toEqual(mockConferenceData)
        })
    })

    describe('.getById', () => {
        it('should resolve to a single NHLConference', () => {
            const conference = mockConferenceData[0]

            expect(conferences.getById(conference.id)).resolves.toEqual(conference)
        })
    })
})
