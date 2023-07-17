import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { SharedLayout } from '../SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../../pages/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailPage'));


const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
