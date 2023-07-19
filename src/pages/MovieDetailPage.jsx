import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import {
  Main,
  BackLink,
  MovieDetails,
  Overview,
  GenresList,
  AdditionalInfo,
} from './MovieDetailPage.styled';

import { getMovieDetails } from '../components/services/Api';

const defaultImg = 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      try {
        const movieData = await getMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error(error);
      } finally {
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    <Main>
      <BackLink to={backLink.current}>← Go back</BackLink>
      <MovieDetails>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt={title}
        />
        <div>
          <h1>{`${title} (${release_date.substring(0, 4)})`}</h1>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <Overview>{overview}</Overview>
          <GenresList>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </GenresList>
        </div>
      </MovieDetails>
      <div>
        <h2>Additional information</h2>
        <AdditionalInfo>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </AdditionalInfo>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </div>
    </Main>
  );
};

export default MovieDetailsPage;
