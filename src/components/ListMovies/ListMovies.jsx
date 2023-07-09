import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from 'api.js';

export const ListMovies = ({ filter }) => {
  const [movies, setMovies] = useState([]);
  
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