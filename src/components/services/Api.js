import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDg2OTc5NGZkZmMyODViY2Q4OTk5YWM4ZjhlZDY5NCIsInN1YiI6IjY0NzhkNWFjZTMyM2YzMDEwNjEzZjQyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ZwiqsRjhmlATbQAdNY8YOqQ1qflDVBY7GKCwf12-sE',
  },
};

export const trendingWeekQuery = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?language=en-US`,
      options
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const searchMovies = async query => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      {
        ...options,
        params: {
          query: query,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieCredits = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
