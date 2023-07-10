import { useState, useEffect, Suspense } from 'react';
import { getMovieDetails } from 'api/api';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";
  
  useEffect(() => {
    const fetchMovieDetails = async () => {
       try {
          const result = await getMovieDetails(movieId);
          setMovie(result);
        } catch (error) {
          console.error('Error fetching movie details:', error);
        }
      };
    
      fetchMovieDetails();
    }, [movieId]);


  const { poster_path, title, userScore, overview, genres } = movie;

    return (
        <div >
        <BackLink to={backLinkHref}>GO BACK</BackLink>
        <div className={css.cardMovie}>
        <img  className={css.cardMoviePoster} src={poster_path} alt={title}/>
        <div className={css.cardMovieDescription}>
        <h2>{title}</h2>
        <p> User score: {userScore}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>          
        </div>
        </div>

        <p className={css.cardMovieAddInfo}>Additional information:</p>

        <ul className={css.cardMovieAddInfo}>
          <li>
            <Link className={css.linkAddInfo} to={`cast`}>Cast</Link>
          </li>
          <li>
            <Link className={css.linkAddInfo} to={`reviews`}>Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
        </div>
    )

}


export default MovieDetails;