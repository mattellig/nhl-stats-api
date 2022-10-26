import { NHLConference } from "./conferences";

export interface NHLDivision {
  link: string;

  /* some divisions do not have this information, especially older divisions included with
   * other resources */
  id?: number;
  name?: string;
  nameShort?: string;
  abbreviation?: string;

  // not always included/not in all resources that include divisions
  conference?: NHLConference;
  active?: boolean;
}
