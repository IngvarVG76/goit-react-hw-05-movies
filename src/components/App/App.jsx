import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { SharedLayout } from '../SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailPage/MovieDetailPage')
);
const Cast = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
