import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

import { getMovieReviews } from '../services/Api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieReviews = async () => {
      try {
        const movieReviews = await getMovieReviews(movieId);
        setReviews(movieReviews.results);
        console.log(movieReviews.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  if (reviews.length === 0) {
    return <div>Loading...</div>;
  }

  const formatDate = datetime => {
    return format(new Date(datetime), 'yyyy.MM.dd HH:mm');
  };

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
          <p>Posted: {formatDate(review.created_at)}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
