import React, { useState, useEffect } from 'react';
import { getMovieReviews } from 'api/api.js';
import { useParams } from 'react-router-dom';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(reviews => setReviews(reviews))
      .catch(error => console.error('Error fetching movie reviews:', error));
  }, [movieId]);
     
  return (<div> 
     {reviews.length > 0 ? (
     <ul className={css.listReviews}>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p className={css.reviewAuthor}> {author} : </p>  
          <p className={css.reviewContent}> {content}</p>
        </li>
      ))}
      </ul>) :
      ( <p>We don't have any reviews for this movie</p> )}
      
    </div>
  )
};

export default MovieReviews;