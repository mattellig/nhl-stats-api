import { divisionsHandlers } from './divisions.handlers'
import { franchisesHandlers } from './franchises.handlers'
import { teamsHandlers } from './teams.handlers'

export const handlers = [
    ...divisionsHandlers,
    ...franchisesHandlers,
    ...teamsHandlers,
]
