import { conferences, divisions } from "./resources";

export type { NHLConference, NHLDivision } from "./types";
export { NHLStatsError } from "./utils";

export const nhlStatsApi = {
  ...conferences,
  ...divisions,
};
