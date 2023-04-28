import client from "../../client/client";
import { NHLSeason } from "../../types";

export interface SeasonOptions {
  id: "current" | string;
}

function getSeasons(options?: never): Promise<NHLSeason[]>;
function getSeasons(options: SeasonOptions): Promise<NHLSeason>;

async function getSeasons(
  options?: SeasonOptions
): Promise<NHLSeason[] | NHLSeason> {
  return client.get("seasons", options);
}

export default { getSeasons };
