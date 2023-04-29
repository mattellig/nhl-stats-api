import type { NHLBaseConferenceDivisionOrTeam } from "./common";

export interface NHLDivision extends NHLBaseConferenceDivisionOrTeam {
  abbreviation: string;
  conference: NHLBaseConferenceDivisionOrTeam & {
    abbreviation?: string;
    shortName?: string;
    active?: boolean;
  };
  active: boolean;
}
