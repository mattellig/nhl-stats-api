export interface NHLDivision {
  id: number;
  name: string;
  link: string;
  abbreviation: string;
  conference: {
    id: number;
    name: string;
    link: string;
    abbreviation?: string;
    shortName?: string;
    active?: boolean;
  };
  active: boolean;
}
