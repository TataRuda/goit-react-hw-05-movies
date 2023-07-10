import React, { useState, useEffect } from 'react';
import { getMovieCredits } from 'api/api.js';
import { useParams } from 'react-router-dom';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
    
  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const credits = await getMovieCredits(movieId);
        setCast(credits);
      } catch (error) {
          console.error('Error fetching movie credits:', error);
      }
    };
  
    fetchMovieCredits();
  }, [movieId]);
    
  return (<div> 
    <ul className={css.listCast}>
      {cast.map(({ id, name, photo, character }) => (
        <li key={id}>
          {photo && <img className={css.photoActor} src={photo} alt={name} />}
          <p>Actor: {name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default MovieCast; 