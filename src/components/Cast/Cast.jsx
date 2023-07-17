import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { format } from 'date-fns';

import { getMovieCredits } from '../services/Api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieCast = async () => {
      try {
        const movieCast = await getMovieCredits(movieId);
        setCast(movieCast.cast);
        console.log(movieCast.cast);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  if (cast.length === 0) {
    return <div>Loading...</div>;
  }


  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <h3>Actor: {actor.name}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt={actor.name}
          />
          <p>As: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
