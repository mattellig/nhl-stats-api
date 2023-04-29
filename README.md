# nhl-stats-api

A Promise-based client for the NHL stats API.

## Features

- ⏳ **Promise-based requests** with [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- 🚫 **Request cancellation** via [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)
- ✅ **TypeScript types**
- 🪶 **Lightweight** (_less than 3kb_)

## Installation

Using npm:

```bash
$ npm i nhl-stats-api
```

Using yarn:

```bash
$ yarn add nhl-stats-api
```

## Getting started

Basic usage example:

```js
import { nhlStatsApi } from "nhl-stats-api";

nhlStatsApi.getTeams().then((teams) => {
  // ...
});

nhlStatsApi.getPlayer({ id: 8478483 }).then((player) => {
  // ...
});
```

...or, with `async`/`await`:

```js
import { nhlStatsApi } from "nhl-stats-api";

const teams = await nhlStatsApi.getTeams();
const player = await nhlStatsApi.getPlayer(8478483);
```

### Canceling requests

All endpoints support request cancellation by passing an `AbortSignal` to the `options` parameter (the last parameter for each endpoint).

```js
const controller = new AbortController();
const signal = controller.signal;

nhlStatsApi.getPlayer(8478483, { signal });

controller.abort();
```

## Endpoints

- [Conferences](#conferences)
- [Divisions](#divisions)
- [Franchises](#franchises)
- [Players](#players)
- [Seasons](#seasons)
- [Teams](#teams)

### Conferences

#### `getConferences`

Returns an array of all active conferences. For inactive conferences, use `getConferenceById`.

```js
nhlStatsApi.getConferences();
```

#### `getConferenceById`

Returns a single conference. Requires the ID of the conference. This can be used to retrieve inactive conferences (e.g. ID `7` for the World Cup of Hockey).

```js
nhlStatsApi.getConferenceById(6);
```

### Divisions

#### `getDivisions`

Returns an array of all active divisions. For inactive divisions, use `getDivisionById`.

```js
nhlStatsApi.getDivisions();
```

#### `getDivisionById`

Returns a single division. Requires the ID of the division. This can be used to retrieve inactive divisions (e.g. ID `13` for the Patrick division).

```js
nhlStatsApi.getDivisionById(17);
```

### Franchises

#### `getFranchises`

Returns an array of all franchises, including inactive ones.

```js
nhlStatsApi.getFranchises();
```

#### `getFranchiseById`

Returns a single franchise. Requires the ID of the franchise.

```js
nhlStatsApi.getFranchiseById(5);
```

### Players

#### `getPlayerById`

Returns a single player. [Requires the ID of the player](#finding-a-players-id).

```js
nhlStatsApi.getPlayer(8478483);
```

#### `getPlayerStats`

Returns an array of stats or stat rankings for a player. [Requires the ID of the player](#finding-a-players-id) and the desired stats type.

```js
nhlStatsApi.getPlayerStats(8478483, "statsSingleSeason");
```

##### Stats types

Below is the list of valid type values. Most types have both regular season and playoff-only versions.

- `"byDayOfWeek"` - Stats split by day of the week.
- `"byDayOfWeekPlayoffs"`
- `"byMonth"` - Stats split by month.
- `"byMonthPlayoffs"`
- `"careerRegularSeason"` - Total career statistics.
- `"careerPlayoffs"`
- `"gameLog"` - Stats split by individual game.
- `"playoffGameLog"`
- `"goalsByGameSituation"` - Number of goals scored by the player, by game situation. For goalies, this appears to be the number of goals scored _against_ them.
- `"goalsByGameSituationPlayoffs"`
- `"homeAndAway"` - Stats split between home and away games.
- `"homeAndAwayPlayoffs"`
- `"regularSeasonStatRankings"` - Where a player ranks vs. the rest of the league in each stat.
- `"playoffStatRankings"`
- `"statsSingleSeason"` - Single season statistics.
- `"statsSingleSeasonPlayoffs"`
- `"vsConference"` - Conference stats split.
- `"vsConferencePlayoffs"`
- `"vsDivision"` - Division stats split.
- `"vsDivisionPlayoffs"`
- `"vsTeam"` - Stats split by opposing team.
- `"vsTeamPlayoffs"`
- `"winLoss"` - Stats split by W/L/OT.
- `"winLossPlayoffs"`
- `"yearByYear"` - Stats split by year. Can include data from leagues besides the NHL (e.g. GTHL, OHL, etc.).
- `"yearByYearPlayoffs"`
- `"yearByYearRank"` - Player ranks in each stat, split by year. Unlike year-by-year stats, this only includes NHL data.
- `"yearByYearPlayoffsRank"`

##### Filtering by season

By default, stats will always be for the current season. To request a different season, use the `season` prop of the `options` parameter. Note that this does not affect some stat types (e.g. career, year-by-year, etc.).

```js
nhlStatsApi.getPlayerStats(8478483, "statsSingleSeason", {
  season: "20172018",
});
```

##### Finding a player's ID

You can find the ID of a player a couple of different ways. Using the API, you can [get the roster of the team](#getteamroster) the player plays (or played) for and get their ID from that.

Alternatively, you can find a player's ID via their [NHL.com](https://www.nhl.com) profile. The number at the end of the URL will be their ID. For example, if you were to go to Mike Bossy's profile, the URL would be:

```
https://www.nhl.com/player/mike-bossy-8445611
```

So, his player ID is **`8445611`**.

### Seasons

#### `getSeasons`

Returns an array of all NHL seasons, past and present.

```js
nhlStatsApi.getSeasons();
```

#### `getSeasonById`

Returns a single season. Requires the ID of the season. Alternatively, `"current"` can be used as the ID to get information on the most recent season of play.

```js
nhlStatsApi.getSeason("20172018");
nhlStatsApi.getSeason("current");
```

### Teams

#### `getTeams`

Returns a list of all active teams. For inactive teams, use `getTeamById`.

```js
nhlStatsApi.getTeams();
```

#### `getTeamById`

Returns a single team. Requires the ID of the team. This can be used to retrieve inactive teams (e.g. ID `11` for the Atlanta Thrashers).

```js
nhlStatsApi.getTeamById(10);
```

#### `getTeamRoster`

Returns an array containing the specified team's roster. Requires the ID of the team.

```js
nhlStatsApi.getTeamRoster(10);
```

##### Full team roster

By default, the return value only includes players on the team's active NHL roster. To request a team's full roster, including inactive, injured, and minor league players, use the `fullRoster` prop of the `options` parameter.

```js
nhlStatsApi.getTeamRoster(10, { fullRoster: true });
```

##### Filtering by season

To request a different season's roster, use the `season` prop of the `options` parameter.

```js
nhlStatsApi.getTeamRoster(10, { season: "20172018" });
```

#### `getTeamStats`

Returns the regular season stats and stat rankings for a team. Requires the ID of the team.

```js
nhlStatsApi.getTeamStats(10);
```

#### Filtering by season

By default, stats will always be for the current season. To request a different season, use the `season` prop of the `options` parameter.

```js
nhlStatsApi.getTeamStats(10, { season: "20172018" });
```

## Acknowledgements

[Drew Hynes](https://pure-defect.com/) for his incredible work [documenting the NHL API](https://gitlab.com/dword4/nhlapi).

---

Disclaimer: NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2023. All Rights Reserved.
