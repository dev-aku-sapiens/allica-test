import React, { Suspense, lazy } from 'react';
import { Favorite } from '@mui/icons-material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { ErrorBoundary, Spinner } from './components/shared';

const CharacterList = lazy(() => import('./pages/CharacterList'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));
const CharacterDetails = lazy(() => import('./pages/CharacterDetails'));

const App: React.FC = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <nav className='bg-blue-600 p-4 text-white sticky top-0 left-0 w-full z-10'>
          <div className='container mx-auto flex justify-between items-center'>
            <Link
              to='/'
              className='text-lg font-bold text-white hover:text-gray-200'
            >
              <img
                alt='Star Wars Characters'
                src='/image/star-wars.png'
                className='h-10 w-auto object-cover'
              />
            </Link>

            <Link data-testid='FavoriteIcon' to='/favorites'>
              <Favorite />
            </Link>
            <Link
              className='hidden'
              data-testid='ViewDetail'
              to='/character/:id'
            >
              View Detail
            </Link>
          </div>
        </nav>

        <main className='flex-grow overflow-y-auto my-4'>
          <ErrorBoundary>
            <Routes>
              <Route
                path='/'
                element={
                  <Suspense fallback={<Spinner />}>
                    <CharacterList />
                  </Suspense>
                }
              />

              <Route
                path='/favorites'
                element={
                  <Suspense fallback={<Spinner />}>
                    <FavoritesPage />
                  </Suspense>
                }
              />

              <Route
                path='/character/:id'
                element={
                  <Suspense fallback={<Spinner />}>
                    <CharacterDetails />
                  </Suspense>
                }
              />
            </Routes>
          </ErrorBoundary>
        </main>

        <footer className='bg-blue-600 text-white p-4 text-center w-full'>
          <p>© 2024 Star Wars App. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
