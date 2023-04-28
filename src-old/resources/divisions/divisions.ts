import client from "../../client/client";
import { NHLDivision } from "../../types";

export type DivisionExpand = "division.conference";

interface BaseDivisionOptions {
  expand?: DivisionExpand[];
}

export interface SingleDivisionOptions extends BaseDivisionOptions {
  id: number;
}

export interface MultiDivisionOptions extends BaseDivisionOptions {
  id?: never;
}

export type DivisionOptions = SingleDivisionOptions | MultiDivisionOptions;

function getDivisions(options?: MultiDivisionOptions): Promise<NHLDivision[]>;
function getDivisions(options: SingleDivisionOptions): Promise<NHLDivision>;

function getDivisions(
  options?: DivisionOptions
): Promise<NHLDivision[] | NHLDivision> {
  return client.get("divisions", options);
}

export default { getDivisions };
