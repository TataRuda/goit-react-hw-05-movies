import { Route, Routes, NavLink } from "react-router-dom";
import  { Home } from 'pages/Home';
import  { Movies } from 'pages/Movies';
import  { MovieDetails } from 'pages/MovieDetails';
import { MovieCast } from 'components/MovieCast/MovieCast';
import styled from "styled-components";
//import { SharedLayout } from "./SharedLayout";
// import { lazy } from 'react';


const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: blue;
  }
`;

export const App = () => {
    return (<div>
      <nav>
      <StyledLink to="/" end>Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>

      </nav>
      <Routes>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<MovieCast />} />
        
      </Route>
      <Route path="*" element={<Home />} />
      
      </Routes>
   
     </div>
    );
  };
