import { NHLDivision } from '../../src/types';
import { mockConferenceData } from './conferences.data';

export const mockDivisionData: NHLDivision[] = [
    {
        id: 17,
        name: 'Atlantic',
        nameShort: 'ATL',
        link: '/api/v1/divisions/17',
        abbreviation: 'A',
        conference: {
            id: 6,
            name: 'Eastern',
            link: '/api/v1/conferences/6',
        },
        active: true,
    },
    {
        id: 16,
        name: 'Central',
        nameShort: 'CEN',
        link: '/api/v1/divisions/16',
        abbreviation: 'C',
        conference: {
            id: 5,
            name: 'Western',
            link: '/api/v1/conferences/5',
        },
        active: true,
    },
    {
        id: 18,
        name: 'Metropolitan',
        nameShort: 'Metro',
        link: '/api/v1/divisions/18',
        abbreviation: 'M',
        conference: {
            id: 6,
            name: 'Eastern',
            link: '/api/v1/conferences/6',
        },
        active: true,
    },
    {
        id: 15,
        name: 'Pacific',
        nameShort: 'PAC',
        link: '/api/v1/divisions/15',
        abbreviation: 'P',
        conference: {
            id: 5,
            name: 'Western',
            link: '/api/v1/conferences/5'
        },
        active: true,
    }
]

function read(expand: string[]): NHLDivision[] {
    return mockDivisionData.map((d) => expandDivisionData(d, expand))
}

function readById(id: number, expand: string[]): NHLDivision[] {
    const division = expandDivisionData(mockDivisionData.find((d) => d.id === id), expand)
    return [division]
}

function expandDivisionData(division: NHLDivision, expand: string[]) {
    if (!expand) return division

    return {
        ...division,
        conference: expand.includes('division.conference')
            ? mockConferenceData.find((c) => c.id === division.conference.id)
            : division.conference,
    }
}

export const divisionsDb = { read, readById }
