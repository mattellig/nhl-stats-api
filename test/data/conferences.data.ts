import { NHLConference } from '../../src';

export const mockConferenceData: NHLConference[] = [
    {
        id: 6,
        name: 'Eastern',
        link: '/api/v1/conferences/6',
        abbreviation: 'E',
        shortName: 'East',
        active: true,
    },
    {
        id: 5,
        name: 'Western',
        link: '/api/v1/conferences/5',
        abbreviation: 'W',
        shortName: 'West',
        active: true,
    },
]

function read(): NHLConference[] {
    return mockConferenceData
}

function readById(id: number): NHLConference[] {
    return [mockConferenceData.find((c) => c.id === id)]
}

export const conferencesDb = { read, readById }
