import { NHLDivision } from '../../src';

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
    },
]

function read(): NHLDivision[] {
    return mockDivisionData
}

function readById(id: number): NHLDivision[] {
    return [mockDivisionData.find((d) => d.id === id)]
}

export const divisionsDb = { read, readById }
