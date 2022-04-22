import conferences from './conferences/conferences'
import divisions from './divisions/divisions'
import franchises from './franchises/franchises'
import players from './players/players'
import seasons from './seasons/seasons'
import teams from './teams/teams'

export default {
    ...conferences,
    ...divisions,
    ...franchises,
    ...players,
    ...seasons,
    ...teams,
}
