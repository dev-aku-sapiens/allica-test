import axios from 'axios';
import { PlanetProps } from '../types/planets';

export const performFetchHomeWorld = async (
  url: string | undefined
): Promise<PlanetProps | undefined> => {
  if (url) {
    const { data } = await axios.get<PlanetProps>(url);
    return data;
  }
  return undefined;
};
