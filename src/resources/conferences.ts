import type { BaseOptions, NHLConference } from "../types";
import { fetchNHLStats } from "../utils";

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
