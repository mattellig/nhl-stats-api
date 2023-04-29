import { NHLStatsError } from "./nhl-stats-error";

export interface BaseOptions {
  signal?: AbortSignal;
}

const BASE_URL = "https://statsapi.web.nhl.com/api/v1/";

export async function fetchNHLStats<T>(
  resource: "conferences" | "divisions" | "franchises" | "people",
  options: BaseOptions & {
    endpoint?: string;
    id?: number;
    [key: string]: any;
  } = {}
): Promise<T> {
  const { endpoint, id, signal, ...params } = options;

  let url = `${BASE_URL}${resource}`;
  if (id) {
    // e.g. /people/:id
    url = `${url}/${id}`;
  }

  if (endpoint) {
    // e.g. /people/:id/stats
    url = `${url}/${endpoint}`;
  }

  if (Object.values(params).some(Boolean)) {
    const searchParams = new URLSearchParams(params as Record<string, string>);

    url = `${url}?${searchParams.toString()}`;
  }

  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    signal,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new NHLStatsError(errorData.message, errorData.messageNumber);
  }

  const data = await response.json();
  const value = data[endpoint || resource];

  if (endpoint) {
    // always return the full response for endpoints (e.g. /roster, /stats, etc.)
    return value;
  }

  // otherwise, if an id is specified then only return the first object
  return id ? value[0] : value;
}
