import { useState, useEffect } from 'react';
import { getMovieDetails } from 'api';
import { Link, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

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
        <div>
        <button> Go to back </button>
        <div>
        <img src={poster_path} alt={title}/>
        <div>
        <h2>{title}</h2>
        <p> User score: {userScore}</p>
        <h3>Overview</h3>
        <p >{overview}</p>
        <h3>Genres</h3>
        <p >{genres}</p>          
        </div>
        </div>

        <p>Additional information</p>

        <ul>
          <li>
            <Link to={`cast`}>Cast</Link>
          </li>
        </ul>
        </div>
    )

}