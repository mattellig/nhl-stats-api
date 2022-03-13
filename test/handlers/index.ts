import { franchisesHandlers } from './franchises.handlers'
import { teamsHandlers } from './teams.handlers'

export const handlers = [
    ...franchisesHandlers,
    ...teamsHandlers,
]
