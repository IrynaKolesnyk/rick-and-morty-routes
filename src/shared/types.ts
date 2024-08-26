export interface Character {
  id: number;
  name: string;
  created: string;
  type: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface Location {
  id: number;
  name: string;
  created: string;
  type: string;
  dimension: string;
}

export interface Episode {
  id: number;
  name: string;
  created: string;
  air_date: string;
  episode: string;
}

export interface ICategory {
  id: number;
  name: string;
  created: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  image?: string;
  dimension?: string;
  air_date?: string;
  episode?: string;
}

export type AllCategoryType =
  | Character
  | Episode
  | Location;
