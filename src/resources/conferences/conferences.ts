import type { NHLConference } from "../../types";
import { BaseOptions, fetchNHLStats } from "../../utils";

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
