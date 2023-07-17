import React, {  useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { trendingWeekQuery } from '../components/services/Api';



const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await trendingWeekQuery();
          setMovies(response.data.results);
        //   console.log(response);
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
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
