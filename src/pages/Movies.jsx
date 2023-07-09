import React, { useState, useEffect } from 'react';
import { ListMovies } from 'components/ListMovies/ListMovies';
import { useLocation } from 'react-router-dom';

export const Movies = () => {
  const [filter, setFilter] = useState('');
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    setFilter(query);
  }, [query]);

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter the name of the film you want to find"
        />
        <button type="submit">Search</button>
      </form>
      {filter && <ListMovies filter={filter} />}
    </div>
  );
}

