export type GenderProps = 'female' | 'male' | 'n/a';

export interface PeopleProps {
  url: string;
  name: string;
  mass: string;
  gender: GenderProps;
  height: string;
  edited: string;
  films: string[];
  created: string;
  eye_color: string;
  homeworld: string;
  species: string[];
  hair_color: string;
  skin_color: string;
  birth_year: string;
  vehicles: string[];
  starships: string[];
}
