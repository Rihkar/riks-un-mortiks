/* eslint-disable camelcase */
import { type } from 'os';

export type Results = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    image : string,
    origin: Origin,
    location: Location,
    episode: string[],
    url: string,
    created: string,
}
type Origin = {
    name: string,
    url: string,
}
type Location = {
    name: string,
    url: string,
}
export type Char = {
  results: Results[],
    }

export type Episodes = {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string,
}

export type Locations = {
    id: number,
    name: string,
    type: string,
    dimension: string,
    residennts: string[],
    url: string,
    created: string,
}
