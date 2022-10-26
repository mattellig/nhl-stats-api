export interface NHLVenue {
  // some venues have no id (on teams, for example)
  id?: number;

  name: string;
  link: string;

  // not included in the venues api
  city?: string;
  timeZone?: {
    id: string;
    offset: number;
    tz: string;
  };

  // not included in the teams api
  appEnabled?: boolean;
}
