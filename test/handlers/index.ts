import { conferencesHandlers } from './conferences'
import { divisionsHandlers } from './divisions'
import { franchisesHandlers } from './franchises'
import { playersHandlers } from './players'
import { teamsHandlers } from './teams'

export const handlers = [
    ...conferencesHandlers,
    ...divisionsHandlers,
    ...franchisesHandlers,
    ...playersHandlers,
    ...teamsHandlers,
]
