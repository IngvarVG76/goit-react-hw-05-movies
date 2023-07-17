import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { trendingWeekQuery } from '../components/services/Api';

const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailPage')
);

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await trendingWeekQuery();
          setMovies(response.data.results);
          console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
