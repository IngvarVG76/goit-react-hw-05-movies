import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { List, ListItem, NoMoviesFound } from './MoviesList.styled';

const MoviesList = ({ movies, location, searchName }) => {
  if (movies.length === 0 && searchName) {
    return <NoMoviesFound>No movies found</NoMoviesFound>;
  }

  return (
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  searchName: PropTypes.string,
};

export default MoviesList;
