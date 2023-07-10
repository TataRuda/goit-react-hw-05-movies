import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovies } from 'api/api.js';
import css from 'components/TrendingFilms/TrendingFilms.module.css';

export const ListMovies = ({ filter }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    fetchSearchMovies();
  },);

  const fetchSearchMovies = async () => {
    try {
      const response = await getMovies(filter);
      const searchMovies = response.data.results;
      setMovies(searchMovies);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };
  

  return (
    <div>
      <ul className={css.listMovies}>
        {movies.map(movie => (
          <li className={css.itemMovie} key={movie.id}>
          <Link  className={css.itemMovie} to={`/movies/${movie.id}`} state={location} >{movie.title}
        </Link></li>
        ))}
      </ul>
    </div>
  );
};