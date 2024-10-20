import { create } from 'zustand';
import { PeopleProps } from '../services';

export interface FavoritesState {
  favorites: PeopleProps[];
  selectedCharacter: PeopleProps;
}

export interface FavoritesAction {
  setDefaultState: () => void;
  removeFavorite: (name: string) => void;
  addFavorite: (character: PeopleProps) => void;
  setFavorite: (character: PeopleProps) => void;
}

export const FAVORITES_INITIAL_STATE: FavoritesState = {
  favorites: [],
  selectedCharacter: {
    url: '',
    name: '',
    mass: '',
    films: [],
    height: '',
    edited: '',
    species: [],
    created: '',
    vehicles: [],
    gender: 'n/a',
    eye_color: '',
    homeworld: '',
    starships: [],
    hair_color: '',
    skin_color: '',
    birth_year: '',
  },
};

export type FavoritesSlice = FavoritesState & FavoritesAction;

export const useFavoritesStore = create<FavoritesSlice>()((set) => ({
  ...FAVORITES_INITIAL_STATE,

  removeFavorite: (name: string) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.name !== name),
    })),

  addFavorite: (character: PeopleProps) =>
    set((state) => ({
      favorites: state.favorites.some((item) => item.name === character.name)
        ? state.favorites
        : [...state.favorites, character],
    })),

  setDefaultState: () => set(() => ({ ...FAVORITES_INITIAL_STATE })),

  setFavorite: (updatedCharacter: PeopleProps) =>
    set((state) => ({
      favorites: state.favorites.map((item) =>
        item.name === updatedCharacter.name ? updatedCharacter : item
      ),
    })),
}));
