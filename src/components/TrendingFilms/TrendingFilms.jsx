import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovies } from 'api/api.js';
import css from './TrendingFilms.module.css';

export const TrendingFilms = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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
      <ul className={css.listMovies}>
        {movies.map(movie => (
          <li className={css.itemMovie} key={movie.id}>
          <Link className={css.itemMovie} to={`/movies/${movie.id}`} state={location} >{movie.title}
        </Link></li>
        ))}
      </ul>
    </div>
  );
};

