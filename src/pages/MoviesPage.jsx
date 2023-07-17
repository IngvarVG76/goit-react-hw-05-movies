import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { searchMovies } from '../components/services/Api';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchName = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (!searchName) return;
    const getSearchResults = async () => {
      try {
        const response = await searchMovies(searchName);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getSearchResults();
  });

  const handleSearchSubmit = event => {
    event.preventDefault();
    const searchValue = searchName;
    setSearchParams({ name: searchValue });
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchName}
          onChange={e => updateQueryString(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesPage;
