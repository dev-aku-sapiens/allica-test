import { useEffect, useState } from 'react';

import { Skeleton } from '../shared';
import { ListSkeleton } from '../skeleton';

import {
  FilmProps,
  PeopleProps,
  StarShipProps,
  performFetchFilm,
  performFetchStarship,
} from '../../services';

const List = ({ character }: { character: PeopleProps }) => {
  const [Loading, setLoading] = useState(true);
  const [filmsData, setFilmsData] = useState<FilmProps[]>([]);
  const [starShipsData, setStarShipsData] = useState<StarShipProps[]>([]);

  useEffect(() => {
    const performFetchData = async () => {
      setLoading(true);

      try {
        const filmsPromises = character.films.map((filmUrl) =>
          performFetchFilm(filmUrl)
        );

        const starshipsPromises = character.starships.map((starshipUrl) =>
          performFetchStarship(starshipUrl)
        );

        const filmsResults = await Promise.all(filmsPromises);
        const starshipsResults = await Promise.all(starshipsPromises);

        setFilmsData(filmsResults.filter(Boolean) as FilmProps[]);
        setStarShipsData(starshipsResults.filter(Boolean) as StarShipProps[]);
      } catch (err) {
        console.error('performFetchFilm performFetchStarship err: ', err);
      } finally {
        setLoading(false);
      }
    };

    performFetchData();
  }, [character.films, character.starships]);

  if (Loading) {
    return (
      <div className='mt-6' role='status' aria-busy='true' aria-live='polite'>
        <Skeleton
          className='h-8 w-64 rounded'
          aria-label='Loading character name'
        />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-2'>
          <ListSkeleton />
          <ListSkeleton />
        </div>
      </div>
    );
  }

  return (
    <section aria-labelledby='character-films-and-starships' className='mt-4'>
      <h2
        id='character-films-and-starships'
        className='text-2xl font-bold text-blue-700 mb-2'
      >
        Character Films and Starships
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-2'>
        <div>
          <h3 className='text-lg font-semibold text-gray-900'>Films:</h3>
          <ul
            className='list-disc pl-4'
            aria-label='List of films the character appeared in'
          >
            {filmsData.length > 0 ? (
              filmsData.map((film, index) => (
                <li
                  key={index}
                  className='font-normal'
                  aria-label={`Film title: ${film?.title ?? 'Unknown title'}`}
                >
                  {film?.title ?? 'Unknown title'}
                </li>
              ))
            ) : (
              <li>No films found</li>
            )}
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-semibold text-gray-900'>Starships:</h3>
          <ul
            aria-label='List of starships piloted by the character'
            className='list-disc pl-4'
          >
            {starShipsData.length > 0 ? (
              starShipsData.map((starship, index) => (
                <li
                  key={index}
                  className='font-normal'
                  aria-label={`Starship name: ${
                    starship?.name ?? 'Unknown starship'
                  }`}
                >
                  {starship?.name ?? 'Unknown starship'}
                </li>
              ))
            ) : (
              <li>No starships found</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default List;
