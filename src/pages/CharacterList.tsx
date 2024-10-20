import React, { useState, useEffect } from 'react';

import { CharacterCard } from '../components/ui';
import { Pagination } from '../components/shared';
import { CharacterSkeleton } from '../components/skeleton';

import { scrollToTop } from '../lib/tools';

import {
  PeopleProps,
  APIPeopleProps,
  performFetchCharacters,
} from '../services';

const CharacterList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [Loading, setLoading] = useState(true);
  const [data, setData] = useState<APIPeopleProps>();

  useEffect(() => {
    const fetchData = async () => {
      scrollToTop();
      setLoading(true);

      try {
        const result = await performFetchCharacters(page);
        setData(result);
      } catch (err) {
        console.error('performFetchCharacters err : ', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-xl font-bold mb-4'>Star Wars Characters</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {Loading
          ? Array.from({ length: 12 }, (_, i) => <CharacterSkeleton key={i} />)
          : data?.results?.map((character: PeopleProps) => (
              <CharacterCard key={character?.url} character={character} />
            ))}
      </div>

      <Pagination data={data} setPage={setPage} />
    </div>
  );
};

export default CharacterList;
