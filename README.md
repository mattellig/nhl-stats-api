# nhl-stats-api

A Promise-based wrapper for the NHL stats API.

*NOTE*: This project contains a selected subset of all available NHL stats API endpoints. More may be added in the future.

## Table of contents

 - [Installation](#installation)
 - [Usage](#usage)
 - [API](#api)
 - [Finding a player's ID](#finding-a-players-id)
 - [Build from source](#build-from-source)
 - [Acknowledgements](#acknowledgements)
 - [License](#license)

## Installation

Using npm:

```bash
$ npm i nhl-stats-api
```

Using yarn:

```bash
$ yarn add nhl-stats-api
```

## Usage

*NOTE*: To get TypeScript typings (for Intellisense/autocomplete) while using CommonJS imports with `require()`, use the following approach:

```js
const nhlStatsApi = require('nhl-stats-api').default;

// nhlStatsApi.<method> will now provide autocomplete and parameter typings
```

Basic usage example:

```js
const nhlStatsApi = require('nhl-stats-api').default;

nhlStatsApi
    .getTeams()
    .then((teams) => {
        // ...
    });

nhlStatsApi
    .getPlayer({ id: 8478483 })
    .then((player) => {
        // ...
    });
```

## API

 - [getConferences](#getconferences)
 - [getDivisions](#getdivisions)
 - [getFranchises](#getfranchises)
 - [getPlayer](#getplayer)
 - [getPlayerStats](#getplayerstats)
 - [getSeasons](#getseasons)
 - [getTeams](#getteams)
 - [getTeamRoster](#getteamroster)
 - [getTeamStats](#getteamstats)

------------

### getConferences

By default, returns a list of all active conferences. You can specify an ID to get a single conference instead.

```js
nhlStatsApi.getConferences(); // returns conferences array
nhlStatsApi.getConferences({ id: 6 }); // returns single conference
```

------------

### getDivisions

By default, returns a list of all active divisions. You can specify an ID to get a single division instead.

```js
nhlStatsApi.getDivisions(); // returns divisions array
nhlStatsApi.getDivisions({ id: 17 }); // returns single division
```

#### Options

 - `expand`: Array of values specifying additional information to include in the results.

 ```js
 nhlStatsApi.getDivisions({ expand: ['division.conference'] });
 ```
 
 Accepted `expand` values for `getDivisions`:
 
  - `division.conference`

------------

### getFranchises

By default, returns a list of all franchises. You can specify an ID to get a single franchise instead.

```js
nhlStatsApi.getFranchises(); // returns franchises array
nhlStatsApi.getFranchises({ id: 1 }); // returns single franchise
```

------------

### getPlayer

Returns a single player. [Requires the ID of the player](#finding-a-players-id).

```js
nhlStatsApi.getPlayer({ id: 8478483 });
```

#### Options

 - `expand`: Array of values specifying additional information to include in the results.
 
 ```js
 nhlStatsApi.getPlayer({ id: 8478483, expand: ['person.names', 'person.social'] });
 ```
 
 Accepted `expand` values for `getPlayer`:
 
  - `person.currentTeam`
  - `person.names`
  - `person.social`

------------

### getPlayerStats

Returns stats or stat rankings for a player. [Requires the ID of the player](#finding-a-players-id) and the desired stats type.

```js
nhlStatsApi.getPlayerStats({ id: 8478483, stats: 'statsSingleSeason' });
```

#### Options

 - `stats`: Specifies which type of stats will be returned. Accepted `stats` values:

  - `byMonth`
  - `byMonthPlayoffs`
  - `byDayOfWeek`
  - `byDayOfWeekPlayoffs`
  - `careerRegularSeason`
  - `careerPlayoffs`
  - `gameLog`
  - `playoffGameLog`
  - `goalsByGameSituation`
  - `goalsByGameSituationPlayoffs`
  - `homeAndAway`
  - `homeAndAwayPlayoffs`
  - `onPaceRegularSeason`
  - `regularSeasonStatRankings`
  - `playoffStatRankings`
  - `statsSingleSeason`
  - `statsSingleSeasonPlayoffs`
  - `vsTeam`
  - `vsTeamPlayoffs`
  - `vsDivision`
  - `vsDivisionPlayoffs`
  - `vsConference`
  - `vsConferencePlayoffs`
  - `winLoss`
  - `winLossPlayoffs`
  - `yearByYear`
  - `yearByYearRank`
  - `yearByYearPlayoffs`
  - `yearByYearPlayoffsRank`


 - `season`: Specifies which NHL season the stats come from. If not set, this will always be the current season of play. Note that this does not affect all stat types (e.g. `yearByYear`, etc.).
 
 ```js
 nhlStatsApi.getPlayerStats({ 
     id: 8478483, 
     stats: 'statsSingleSeason', 
     season: '20172018',
 });
 ```

------------

### getSeasons

By default, returns a list of all NHL seasons. You can specify an ID to get a single season instead. Alternatively, you can use "current" as the ID to get information on the current season of play.

```js
nhlStatsApi.getSeasons(); // returns seasons array
nhlStatsApi.getSeasons({ id: '19921993' }); // returns single season
nhlStatsApi.getSeasons({ id: 'current' }); // returns single season
```

------------

### getTeams

By default, returns a list of all active teams. You can specify an ID to get a single team instead.

```js
nhlStatsApi.getTeams(); // returns teams array
nhlStatsApi.getTeams({ id: 10 }); // returns single team
```

#### Options

 - `expand`: Array of values specifying additional information to include in the results.
 
 ```js
 nhlStatsApi.getTeams({ expand: ['team.playoffs', 'team.record'] });
 ```
 
 Accepted `expand` values for `getTeams`:
 
  - `roster.person`
  - `person.names`
  - `person.social`
  - `team.conference`
  - `team.division`
  - `team.franchise`
  - `team.playoffs`
  - `team.record`
  - `team.roster` (see also: [getTeamRoster](#getteamroster))
  - `team.social`
  - `team.stats` (see also: [getTeamStats](#getteamstats))


 - `rosterType`: If incuding the team's roster (via `expand`), specifies which type of roster the results should include.

 ```js
 nhlStatsApi.getTeams({ expand: ['team.roster'], rosterType: 'fullRoster' });
 ```
 
 Accepted `rosterType` values:
 
  - `active` (default)
  - `fullRoster`


- `season`: Specifies which NHL season the team data should come from. If not set, this will always be the current season of play. Affects things like record, roster, stats, etc. (all included via `expand`).
 
 ```js
 nhlStatsApi.getTeams({ expand: ['team.record'], season: '19661967' });
 ```

------------

### getTeamRoster

By default, returns the active roster for a team. Requires the ID of the team.

```js
nhlStatsApi.getTeamRoster({ id: 10 });
```

#### Options

- `expand`: Array of values specifying additional information to include in the results.
 
 ```js
 nhlStatsApi.getTeamRoster({ id: 10, expand: ['roster.person'] });
 ```
 
 Accepted `expand` values for `getTeamRoster`:
 
  - `roster.person`
  - `person.names`
  - `person.social`


- `rosterType`: Specifies which type of roster to return.
 
 ```js
 nhlStatsApi.getTeamRoster({ id: 10, rosterType: 'fullRoster' });
 ```
 
 Accepted `rosterType` values: 

  - `active` (default)
  - `fullRoster`


- `season`: Specifies which NHL season the roster should come from. If not set, this will always be the current season of play.
 
 ```js
 nhlStatsApi.getTeamRoster({ id: 10, season: '19661967' });
 ```

------------

### getTeamStats

Returns the regular season stats and stat rankings for a team. Requires the ID of the team.

```js
nhlStatsApi.getTeamStats({ id: 10 });
```

#### Options

- `expand`: Array of values specifying additional information to include in the results.
 
 ```js
 nhlStatsApi.getTeamStats({ id: 10, expand: ['stats.team'] });
 ```
 
 Accepted `expand` values for `getTeamStats`:
 
  - `stats.team`
 
 
- `season`: Specifies which NHL season the stats should come from. If not set, this will always be the current season of play.
 
 ```js
 nhlStatsApi.getTeamStats({ id: 10, season: '19661967' });
 ```

------------

### Finding a player's ID

You can find the ID of a player a couple of different ways. Using the API, you can [get the roster of the team](#getteamroster) the player plays (or played) for and get their ID from that.

Alternatively, you can find a player's ID via their [NHL.com](https://www.nhl.com) profile. The number at the end of the URL will be their ID. For example, if you were to go to Mike Bossy's profile, the URL would be:

```
https://www.nhl.com/player/mike-bossy-8445611
```

So, his player ID is **8445611**.

## Build from source

```bash
$ git clone https://github.com/mattellig/nhl-stats-api.git
$ cd nhl-stats-api
$ yarn
```

After installing dependencies, you can build with `yarn build`.

## Acknowledgements

[Drew Hynes](https://pure-defect.com/) for his incredible work [documenting the NHL API](https://gitlab.com/dword4/nhlapi).

## License

[MIT](LICENSE)

------------

Disclaimer: NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2022. All Rights Reserved.
