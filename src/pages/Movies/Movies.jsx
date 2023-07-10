import React, { useState, useEffect } from 'react';
import { ListMovies } from 'components/ListMovies/ListMovies';
import { useLocation } from 'react-router-dom';
import css from './Movies.module.css'

const Movies = () => {
  const [filter, setFilter] = useState('');
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();
    if (query) {
      setFilter(query);
      updateQueryParams(query);
    }
  };

  const updateQueryParams = query => {
    const searchParams = new URLSearchParams();
    searchParams.set('query', query);
    const newUrl = `${location.pathname}?${searchParams.toString()}`;
    window.history.replaceState(null, null, newUrl);
  };

  useEffect(() => {
    setFilter(query);
  }, [query]);

  return (
    <div>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
        className={css.searchInput}
          type="text"
          name="search"
          placeholder="Enter the name of the movie in English"
        />
        <button className={css.searchBtn} type="submit">Search</button>
      </form>
      {filter && <ListMovies filter={filter} />}
    </div>
  );
};

export default Movies;

