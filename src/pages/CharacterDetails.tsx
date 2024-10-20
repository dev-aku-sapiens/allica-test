import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { List } from '../components/ui';
import { CharacterDetailsSkeleton } from '../components/skeleton';

import { useFavoritesStore } from '../store';
import { GenderFormatter } from '../lib/tools';

import {
  PeopleProps,
  PlanetProps,
  performFetchCharacter,
  performFetchHomeWorld,
} from '../services';

import { Button } from '../components/shared';

const CharacterDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const favorites = useFavoritesStore((state) => state.favorites);
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  const [Loading, setLoading] = useState(true);
  const [characterData, setCharacterData] = useState<PeopleProps | undefined>();
  const [homeWorldData, setHomeWorldData] = useState<PlanetProps | undefined>();

  useEffect(() => {
    const performFetchData = async () => {
      setLoading(true);
      try {
        const characterResponse = await performFetchCharacter(id!);
        setCharacterData(characterResponse);

        if (characterResponse.homeworld) {
          const homeWorldResponse = await performFetchHomeWorld(
            characterResponse.homeworld
          );
          setHomeWorldData(homeWorldResponse);
        }
      } catch (err) {
        console.error(
          'performFetchCharacter and performFetchHomeWorld err : ',
          err
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      performFetchData();
    }
  }, [id]);

  if (Loading) {
    return <CharacterDetailsSkeleton />;
  }

  if (!characterData) {
    return <div className='text-gray-700'>No character data available</div>;
  }

  const isFavorited = favorites.some((fav) => fav.name === characterData.name);

  const toggleFavorite = () => {
    if (isFavorited) {
      removeFavorite(characterData.name);
    } else {
      addFavorite(characterData);
    }
  };

  return (
    <div className='container mx-auto px-4 py-2'>
      <section aria-live='polite'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-2xl font-bold text-blue-700'>
            {characterData?.name ?? '-'}
          </h1>

          <Button
            onClick={toggleFavorite}
            variant={isFavorited ? 'secondary' : 'primary'}
          >
            {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-2'>
          <div className='text-lg space-y-3'>
            <p className='font-semibold'>
              Gender:{' '}
              <span className='font-normal'>
                {GenderFormatter(characterData?.gender)}
              </span>
            </p>
            <p className='font-semibold'>
              Hair Color:{' '}
              <span className='font-normal'>
                {characterData?.hair_color ?? '-'}
              </span>
            </p>
            <p className='font-semibold'>
              Eye Color:{' '}
              <span className='font-normal'>
                {characterData?.eye_color ?? '-'}
              </span>
            </p>
            <p className='font-semibold'>
              Height:{' '}
              <span className='font-normal'>
                {characterData?.height ?? '-'}
              </span>
            </p>
            <p className='font-semibold'>
              Birth Year:{' '}
              <span className='font-normal'>
                {characterData?.birth_year ?? '-'}
              </span>
            </p>
          </div>

          <div className='text-lg space-y-3'>
            <p className='font-semibold'>
              Home World:{' '}
              <span className='font-normal'>{homeWorldData?.name ?? '-'}</span>
            </p>
            <p className='font-semibold'>
              Skin Color:{' '}
              <span className='font-normal'>
                {characterData?.skin_color ?? '-'}
              </span>
            </p>
            <p className='font-semibold'>
              Mass:{' '}
              <span className='font-normal'>{characterData?.mass ?? '-'}</span>
            </p>
          </div>
        </div>

        <section className='mt-4'>
          <List character={characterData} />
        </section>
      </section>
    </div>
  );
};

export default CharacterDetails;
