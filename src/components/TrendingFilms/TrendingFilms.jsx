import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from 'api.js';

export const TrendingFilms = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    try {
      const response = await getMovies();
      const trendingMovies = response.data.results;
      setMovies(trendingMovies);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  };

  return (
    <div>
      <h2>Trending Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} >{movie.title}
        </Link></li>
        ))}
      </ul>
    </div>
  );
};

