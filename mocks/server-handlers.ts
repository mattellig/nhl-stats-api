import { rest, type RequestHandler } from "msw";
import {
  mockConferences,
  mockDivisions,
  mockFranchises,
  mockPlayerStats,
  mockPlayers,
  mockSeasons,
  mockTeamRoster,
  mockTeamStats,
  mockTeams,
} from "./data";

const notFoundError = {
  messageNumber: 10,
  message: "Object not found",
};

export const handlers: RequestHandler[] = [
  rest.get(
    "https://statsapi.web.nhl.com/api/v1/conferences",
    (_req, res, ctx) => {
      return res(ctx.json({ conferences: mockConferences }));
    }
  ),
  rest.get(
    "https://statsapi.web.nhl.com/api/v1/conferences/:id",
    (req, res, ctx) => {
      const { id } = req.params;

      const conference = mockConferences.find((c) => c.id === Number(id));
      if (!conference) {
        return res(ctx.status(404), ctx.json(notFoundError));
      }

      return res(ctx.json({ conferences: [conference] }));
    }
  ),
  rest.get(
    "https://statsapi.web.nhl.com/api/v1/divisions",
    (_req, res, ctx) => {
      return res(ctx.json({ divisions: mockDivisions }));
    }
  ),
  rest.get(
    "https://statsapi.web.nhl.com/api/v1/divisions/:id",
    (req, res, ctx) => {
      const { id } = req.params;

      const division = mockDivisions.find((d) => d.id === Number(id));
      if (!division) {
        return res(ctx.status(404), ctx.json(notFoundError));
      }

      return res(ctx.json({ divisions: [division] }));
    }
  ),
  rest.get(
    "https://statsapi.web.nhl.com/api/v1/franchises",
    (_req, res, ctx) => {
      return res(ctx.json({ franchises: mockFranchises }));
    }
  ),
  rest.get(
    "https://statsapi.web.nhl.com/api/v1/franchises/:id",
    (req, res, ctx) => {
      const { id } = req.params;

      const franchise = mockFranchises.find(
        (f) => f.franchiseId === Number(id)
      );

      if (!franchise) {
        return res(ctx.status(404), ctx.json(notFoundError));
      }

      return res(ctx.json({ franchises: [franchise] }));
    }
  ),
  rest.get(
    "https://statsapi.web.nhl.com/api/v1/people/:id",
    (req, res, ctx) => {
      const { id } = req.params;

      const player = mockPlayers.find((p) => p.id === Number(id));
      if (!player) {
        return res(ctx.status(404), ctx.json(notFoundError));
      }

      return res(ctx.json({ people: [player] }));
    }
  ),
  rest.get(
    "https://statsapi.web.nhl.com/api/v1/people/:id/stats",
    (req, res, ctx) => {
      // we normally would filter by id as well but we're only keeping sample
      // stat data for a single player
      const stats = req.url.searchParams.get("stats");

      const playerStats = mockPlayerStats.filter(
        (mps) => mps.type.displayName === stats
      );

      return res(ctx.json({ stats: playerStats }));
    }
  ),
  rest.get("https://statsapi.web.nhl.com/api/v1/seasons", (_req, res, ctx) => {
    return res(ctx.json({ seasons: mockSeasons }));
  }),
  rest.get(
    "https://statsapi.web.nhl.com/api/v1/seasons/:id",
    (req, res, ctx) => {
      const { id } = req.params;

      let season;
      if (id === "current") {
        season = mockSeasons[mockSeasons.length - 1];
      } else {
        season = mockSeasons.find((s) => s.seasonId === id);
        if (!season) {
          return res(ctx.status(404), ctx.json(notFoundError));
        }
      }

      return res(ctx.json({ seasons: [season] }));
    }
  ),
  rest.get("https://statsapi.web.nhl.com/api/v1/teams", (_req, res, ctx) => {
    return res(ctx.json({ teams: mockTeams }));
  }),
  rest.get("https://statsapi.web.nhl.com/api/v1/teams/:id", (req, res, ctx) => {
    const { id } = req.params;

    const team = mockTeams.find((t) => t.id === Number(id));
    if (!team) {
      return res(ctx.status(404), ctx.json(notFoundError));
    }

    return res(ctx.json({ teams: [team] }));
  }),
  rest.get(
    "https://statsapi.web.nhl.com/api/v1/teams/:id/roster",
    (_req, res, ctx) => {
      // we normally would filter by id but we're only keeping sample
      // roster data for a single team
      return res(ctx.json({ roster: mockTeamRoster }));
    }
  ),
  rest.get(
    "https://statsapi.web.nhl.com/api/v1/teams/:id/stats",
    (_req, res, ctx) => {
      // we normally would filter by id but we're only keeping sample
      // stats data for a single team
      return res(ctx.json({ stats: mockTeamStats }));
    }
  ),
];
