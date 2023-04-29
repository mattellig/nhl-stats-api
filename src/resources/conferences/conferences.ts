import type { NHLConference } from "../../types";
import { fetchNHLStats, type BaseOptions } from "../../utils";

export function getConferences(
  options?: BaseOptions
): Promise<NHLConference[]> {
  return fetchNHLStats<NHLConference[]>("conferences", options);
}

export function getConferenceById(
  id: number,
  options?: BaseOptions
): Promise<NHLConference> {
  return fetchNHLStats("conferences", { ...options, id });
}
