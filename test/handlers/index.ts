import { conferencesHandlers } from './conferences'
import { divisionsHandlers } from './divisions'
import { franchisesHandlers } from './franchises'
import { teamsHandlers } from './teams'

export const handlers = [
    ...conferencesHandlers,
    ...divisionsHandlers,
    ...franchisesHandlers,
    ...teamsHandlers,
]
