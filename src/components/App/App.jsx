import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import  SharedLayout from 'components/SharedLayout/SharedLayout';


const Home  = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import( 'pages/Movies/Movies'));
const MovieDetails = lazy(() => import( 'pages/MovieDetails/MovieDetails'));
const MovieCast = lazy(() => import('components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('components/MovieReviews/MovieReviews'));

export const App = () => {
    return ( <>
      <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />      
      </Route>
      <Route path="*" element={<Home />} />
      </Route>
      </Routes>
    </>
    );
  };
