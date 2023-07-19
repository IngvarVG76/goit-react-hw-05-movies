import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams, Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { Main } from "./MoviesPage.styled";
import { searchMovies } from '../components/services/Api';

import SearchForm from '../components/SearchForm/SearchForm';
const MoviesList = lazy(() => import('../components/MoviesList/MoviesList'));

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get('name') ?? '';

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        const response = await searchMovies(searchName);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getSearchResults();
  }, [searchName]);

  const updateQueryString = name => {
    const nextParams = name.trim() !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  const handleSearchSubmit = searchValue => {
    setSearchParams({ name: searchValue });
  };

  return (
    <Main>
      <SearchForm
        onSubmit={handleSearchSubmit}
        value={searchName}
        onChange={updateQueryString}
      />
      <Suspense fallback={<p>Loading...</p>}>
        <MoviesList
          movies={movies}
          location={location}
          searchName={searchName}
        />
        <Outlet />
      </Suspense>
    </Main>
  );
};

export default MoviesPage;
