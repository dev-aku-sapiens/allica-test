import React, { useState, useEffect } from 'react';
import {
  Wc,
  Cake,
  Scale,
  Public,
  Height,
  Favorite,
  FavoriteBorder,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Face2Icon from '@mui/icons-material/Face2';
import { IconButton, Tooltip } from '@mui/material';

import { Button, Skeleton } from '../shared';

import { useFavoritesStore } from '../../store';
import { GenderFormatter } from '../../lib/tools';

import {
  PeopleProps,
  PlanetProps,
  performFetchHomeWorld,
} from '../../services';

interface CharacterCardProps {
  character: PeopleProps;
  isFavoriteView?: boolean;
  onEdit?: (character: PeopleProps) => void;
  onRemove?: (characterName: string) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  onEdit,
  onRemove,
  character,
  isFavoriteView = false,
}) => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  const homeworldUrl = character?.homeworld;
  const isFavorited = favorites.some((fav) => fav.name === character.name);

  const [Loading, setLoading] = useState(true);
  const [homeWorld, setHomeWorld] = useState<PlanetProps | undefined>();

  useEffect(() => {
    const fetchHomeWorldData = async () => {
      if (!homeworldUrl) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const result = await performFetchHomeWorld(homeworldUrl);
        setHomeWorld(result);
      } catch (err) {
        console.error('performFetchHomeWorld err : ', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeWorldData();
  }, [homeworldUrl]);

  const toggleFavorite = () => {
    if (isFavorited) {
      removeFavorite(character.name);
    } else {
      addFavorite(character);
    }
  };

  return (
    <div
      aria-live='polite'
      aria-labelledby={`character-name-${character.name}`}
      aria-describedby={`character-details-${character.name}`}
      className='bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col gap-2'
    >
      <div className='flex justify-between items-center'>
        <h2
          id={`character-name-${character.name}`}
          className='text-2xl font-bold text-blue-600'
        >
          {character.name}
        </h2>

        {!isFavoriteView && (
          <div className='flex justify-between space-x-4'>
            <Tooltip
              title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
            >
              <IconButton
                color='primary'
                className='size-14'
                onClick={toggleFavorite}
                aria-label={
                  isFavorited ? 'Remove from favorites' : 'Add to favorites'
                }
              >
                {isFavorited ? (
                  <Favorite sx={{ color: '#2563EB' }} />
                ) : (
                  <FavoriteBorder sx={{ color: '#2563EB' }} />
                )}
              </IconButton>
            </Tooltip>
          </div>
        )}
      </div>

      <div
        id={`character-details-${character.name}`}
        className='grid grid-cols-2 gap-y-1 text-sm text-gray-700'
      >
        <div className='flex items-center gap-x-2'>
          <Public fontSize='small' sx={{ color: '#2563EB' }} />
          <p className='font-bold text-gray-900'>Home World:</p>
        </div>
        {Loading ? (
          <Skeleton className='h-4 w-2/3 mt-1' ariaLabel='Loading Home World' />
        ) : (
          <p className='font-semibold text-gray-800'>
            {homeWorld?.name ?? '-'}
          </p>
        )}

        <div className='flex items-center gap-x-2'>
          <Cake fontSize='small' sx={{ color: '#2563EB' }} />
          <p className='font-bold text-gray-900'>Birth Year:</p>
        </div>
        <p className='font-semibold text-gray-800'>{character.birth_year}</p>

        <div className='flex items-center gap-x-2'>
          <Wc fontSize='small' sx={{ color: '#2563EB' }} />
          <p className='font-bold text-gray-900'>Gender:</p>
        </div>
        <p className='font-semibold text-gray-800'>
          {GenderFormatter(character.gender)}
        </p>

        <div className='flex items-center gap-x-2'>
          <Face2Icon fontSize='small' sx={{ color: '#2563EB' }} />
          <p className='font-bold text-gray-900'>Hair Color:</p>
        </div>
        <p className='font-semibold text-gray-800'>{character.hair_color}</p>

        <div className='flex items-center gap-x-2'>
          <Height fontSize='small' sx={{ color: '#2563EB' }} />
          <p className='font-bold text-gray-900'>Height:</p>
        </div>
        <p className='font-semibold text-gray-800'>{character.height}</p>

        <div className='flex items-center gap-x-2'>
          <Scale fontSize='small' sx={{ color: '#2563EB' }} />
          <p className='font-bold text-gray-900'>Mass:</p>
        </div>
        <p className='font-semibold text-gray-800'>{character.mass}</p>
      </div>

      {isFavoriteView ? (
        <div className='flex gap-2 mt-4 w-full'>
          <Button fw variant='primary' onClick={() => onEdit?.(character)}>
            Edit
          </Button>
          <Button
            fw
            variant='secondary'
            onClick={() => onRemove?.(character.name)}
          >
            Remove
          </Button>
        </div>
      ) : (
        <Link
          className='mt-4'
          aria-label={`View details for ${character.name}`}
          to={`/character/${character.url.split('/').slice(-2, -1)[0]}`}
        >
          <Button fw variant='primary'>
            View Detail
          </Button>
        </Link>
      )}
    </div>
  );
};

export default CharacterCard;
