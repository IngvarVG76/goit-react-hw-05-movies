import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import {
  Link,
  Route,
  Routes,
  useLocation,
  useParams,
  Outlet,
} from 'react-router-dom';
import { getMovieDetails } from '../components/services/Api';

const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
        try {
            const movieData = await getMovieDetails(movieId);
            setMovie(movieData);
            console.log(movieData);
            console.log(movieId);
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

  const { details } = movie;

  return (
    <div>
      <Link to={backLinkHref.current}>Go back</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          alt={details.title}
        />
        <h1>{`${details.title} (${details.release_date.substring(0, 4)})`}</h1>
        <p>User score: {details.vote_average * 10}%</p>
        <h2>Overview</h2>
        <p>{details.overview}</p>
        <h2>Genres</h2>
        <p>{details.genres.map(genre => genre.name).join(', ')}</p>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to={`cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path={`cast`} element={<Cast />} />
            <Route path={`reviews`} element={<Reviews />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetailsPage;