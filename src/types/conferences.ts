import type { NHLBaseConferenceDivisionOrTeam } from "./common";

export interface NHLConference extends NHLBaseConferenceDivisionOrTeam {
  abbreviation: string;
  shortName: string;
  active: boolean;
}
