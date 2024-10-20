import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Button } from '../components/shared';
import { CharacterCard, EditModal } from '../components/ui';

import { GenderProps, PeopleProps } from '../services';
import { useFavoritesStore, FAVORITES_INITIAL_STATE } from '../store';

const FavoritesPage: React.FC = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  const [height, setHeight] = useState('');
  const [gender, setGender] = useState<GenderProps>('n/a');
  const [editingCharacter, setEditingCharacter] = useState<PeopleProps>(
    FAVORITES_INITIAL_STATE.selectedCharacter
  );

  const handleEditClick = (character: PeopleProps) => {
    setHeight(character.height);
    setGender(character.gender);
    setEditingCharacter(character);
  };

  return (
    <div className='container mx-auto p-4'>
      <h1
        className={`text-2xl font-bold mb-6 ${
          favorites.length ? 'text-left' : 'text-center'
        }`}
      >
        My Favorite Characters
      </h1>
      {favorites.length === 0 ? (
        <div className='flex flex-col items-center justify-center mt-16'>
          <FavoriteIcon sx={{ fontSize: 80, color: '#E53E3E' }} />
          <p className='text-lg font-semibold mt-4'>No favorites added yet</p>
          <p className='text-gray-600 mt-2'>
            Add characters to your favorites list and they'll show up here.
          </p>
          <Link className='mt-4' aria-label={`Back to Home`} to={`/`}>
            <Button className='mt-6' variant='primary'>
              Browse Characters
            </Button>
          </Link>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {favorites?.map((character: PeopleProps) => (
            <CharacterCard
              isFavoriteView
              key={character.name}
              character={character}
              onEdit={handleEditClick}
              onRemove={removeFavorite}
            />
          ))}
        </div>
      )}

      {editingCharacter && (
        <EditModal
          height={height}
          gender={gender}
          setHeight={setHeight}
          setGender={setGender}
          editingCharacter={editingCharacter}
          setEditingCharacter={setEditingCharacter}
        />
      )}
    </div>
  );
};

export default FavoritesPage;
