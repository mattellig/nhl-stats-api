export interface NHLConference {
    // some conferences have no id or name (on teams, for example)
    id?: number;
    name?: string;

    link: string;

    // not included in the divisions or teams api
    abbreviation?: string;
    shortName?: string;
    active?: boolean;
}
