import { rest, type RequestHandler } from "msw";
import { mockConferences, mockDivisions } from "./data";

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

      return res(ctx.json({ conferences: conference }));
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

      return res(ctx.json({ divisions: division }));
    }
  ),
];
