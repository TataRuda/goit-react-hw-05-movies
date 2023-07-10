import axios from 'axios';

const API_KEY = '0ea25c224ecd0097d95288cc73c0f999';
const BASE_URL = 'https://api.themoviedb.org/3';
const imgURL = 'https://image.tmdb.org/t/p/w200';

//to get the list of the most popular movies for today
export const getMovies = (query) => {
  let url;
  if (query) {
    url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
  } else {
    url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
  }
  return axios.get(url);
};

//to get full information about the film
export const getMovieDetails = async movieId => {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    const {
      genres,
      id,
      poster_path,
      release_date = '',
      title,
      vote_average,
      overview,
    } = response.data;

    return {
      id,
      poster_path: `${imgURL}${poster_path}`,
      title: `${title} (${release_date.slice(0, 4)})`,
      userScore: `${Math.round(vote_average * 10)}%`,
      overview,
      genres: genres.map(genre => genre.name).join(' '),
    };
};

// information about the film cast
export const getMovieCredits = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    const { cast } = response.data;

    return cast.map(({ id, name, profile_path, character }) => ({
      id,
      name,
      character,
      photo: profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}` : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`,
    }));
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    return [];
  }
};

// information about the film reviews
export const getMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );
    const { results } = response.data;
    return results.map(({ id, author, content }) => ({id, author, content }));
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    return [];
  }
};

