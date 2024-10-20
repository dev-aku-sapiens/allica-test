import axios from 'axios';
import { StarShipProps } from '../types/starships';

export const performFetchStarship = async (
  url: string
): Promise<StarShipProps> => {
  const { data } = await axios.get<StarShipProps>(url);
  return data;
};
