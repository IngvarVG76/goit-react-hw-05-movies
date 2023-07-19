import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastList,
  CastItem,
  ActorName,
  ActorImage,
  ActorCharacter,
} from './Cast.styled';

import { getMovieCredits } from '../services/Api';

const defaultImg = 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieCast = async () => {
      try {
        const movieCast = await getMovieCredits(movieId);
        setCast(movieCast.cast);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  if (cast.length === 0) {
    return <p>Cast currently not available</p>;
  }

  return (
    <CastList>
      {cast.map(actor => (
        <CastItem key={actor.id}>
          <ActorImage
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                : defaultImg
            }
            alt={actor.name}
          />
          <ActorName>{actor.name}</ActorName>
          <ActorCharacter>As: {actor.character}</ActorCharacter>
        </CastItem>
      ))}
    </CastList>
  );
};

// No props to validate

export default Cast;
