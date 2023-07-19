import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { Main, Heading } from './HomePage.styled';
import { trendingWeekQuery } from '../components/services/Api';

const MoviesList = lazy(() => import('../components/MoviesList/MoviesList'));

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await trendingWeekQuery();
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <Main>
      <Heading>Trending Movies</Heading>
      <Suspense fallback={<p>Loading...</p>}>
        <MoviesList movies={movies} />
        <Outlet />
      </Suspense>
    </Main>
  );
};

export default HomePage;
