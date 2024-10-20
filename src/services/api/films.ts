import axios from 'axios';
import { FilmProps } from '../types/films';

export const performFetchFilm = async (url: string): Promise<FilmProps> => {
  const { data } = await axios.get<FilmProps>(url);
  return data;
};
