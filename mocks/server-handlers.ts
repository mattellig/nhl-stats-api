import { rest, type RequestHandler } from "msw";
import {
  mockConferences,
  mockDivisions,
  mockFranchises,
  mockPlayerStats,
  mockPlayers,
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
];
