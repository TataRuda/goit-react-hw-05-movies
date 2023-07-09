import React, { useState, useEffect } from 'react';
import { getMovieCredits } from 'api.js';
import { useParams } from 'react-router-dom';

export const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    
    useEffect(() => {
        getMovieCredits(movieId).then(result => setCast(result));
      }, [movieId]);

    
    return (
        <ul>
        <p> First actor </p>  
        {cast.map(({ id, name, photo, character }) => (
        <li key={id}>
          {photo && <img src={photo} alt={name} />}
          <p>Actor: {name}</p>
          <p>Character: {character}</p>
        </li>
        ))}
        </ul>
    )


}