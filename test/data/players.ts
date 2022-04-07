import { NHLPlayer, NHLPlayerOtherNames, NHLSocialMedia } from '../../src/types';
import { mockPlayerData } from './shared';
import { mockTeamData } from './teams';

const mockPlayerOtherNames: Record<number, NHLPlayerOtherNames> = {
    8475789: {
        slug: 'jack-campbell-8475789',
        lastFirstName: 'Campbell, Jack',
        firstLastNameRoman: 'Jack Campbell',
    },
    8475166: {
        slug: 'john-tavares-8475166',
        lastFirstName: 'Tavares, John',
        firstLastNameRoman: 'John Tavares',
    },
    8478483: {
        slug: 'mitchell-marner-8478483',
        lastFirstName: 'Marner, Mitchell',
        firstLastNameRoman: 'Mitchell Marner',
    },
}

const mockPlayerSocials: Record<number, NHLSocialMedia> = {
    8475789: {},
    8475166: { twitter: ['91Tavares'] },
    8478483: { twitter: ['Marner93'] },
}

function readById(id: number, expand: string[]): NHLPlayer[] {
    const player = mockPlayerData.find((p) => p.id === id)

    return [{
        ...player,
        currentTeam: expand.includes('person.currentTeam')
            ? mockTeamData.find((t) => t.id === player.currentTeam.id)
            : player.currentTeam,
        otherNames: expand.includes('person.names')
            ? mockPlayerOtherNames[player.id]
            : player.otherNames,
        social: expand.includes('person.social')
            ? mockPlayerSocials[player.id]
            : player.social,
    }]
}

export const playersDb = { readById }
