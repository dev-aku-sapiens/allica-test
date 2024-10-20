import { FilmProps } from './films';
import { PeopleProps } from './people';
import { PlanetProps } from './planets';
import { StarShipProps } from './starships';

export * from './films';
export * from './people';
export * from './planets';
export * from './starships';

export interface APIBaseResponse<T> {
  results: T[];
  count: number;
  next: string | null;
  previous: string | null;
}

export type APIFilmsProps = APIBaseResponse<FilmProps>;
export type APIPeopleProps = APIBaseResponse<PeopleProps>;
export type APIPlanetsProps = APIBaseResponse<PlanetProps>;
export type APIStarShipsProps = APIBaseResponse<StarShipProps>;
