import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

import {
  ReviewList,
  ReviewItem,
  Author,
  ReviewContent,
  ReviewDate,
} from './Reviews.styled';
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
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  const formatDate = datetime => {
    return format(new Date(datetime), 'yyyy.MM.dd HH:mm');
  };

  if (reviews.length === 0) {
    return <p>We don't have any reviews yet</p>;
  }

  return (
    <ReviewList>
      {reviews.map(review => (
        <ReviewItem key={review.id}>
          <Author>{review.author}</Author>
          <ReviewContent>{review.content}</ReviewContent>
          <ReviewDate>Posted: {formatDate(review.created_at)}</ReviewDate>
        </ReviewItem>
      ))}
    </ReviewList>
  );
};

// No props to validate

export default Reviews;
