import axios from 'axios';

import { PeopleProps } from '../types/people';
import { apiUrl } from '../../lib/constants';
import { APIPeopleProps } from '../types';

export const performFetchCharacters = async (
  page: number
): Promise<APIPeopleProps> => {
  const { data } = await axios.get<APIPeopleProps>(
    `${apiUrl}/people/?page=${page}`
  );
  return data;
};

export const performFetchCharacter = async (id: string) => {
  const { data } = await axios.get<PeopleProps>(`${apiUrl}/people/${id}`);
  return data;
};
