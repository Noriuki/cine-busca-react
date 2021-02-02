import React, { useState } from 'react';

import './SearchPage.css';

import Header from '../components/Header';
import MovieCard from '../components/MovieCard';

const SearchPage = () => {
  const [movieString, setmovieString] = useState('');
  const [moviesList, setMoviesList] = useState([]);

  const moviesReturn = () => {
    if (moviesList !== undefined)
      return moviesList.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          posterUrl={movie.Poster}
          release={movie.Year}
          movieID={movie.imdbID}
        />
      ));
    return <h2 className="error-message"> MOVIES NOT FOUND! </h2>;
  };

  const getMovies = (e) => {
    e.preventDefault();

    fetch(`https://www.omdbapi.com/?s=${movieString}&apikey=433de550`, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((result) => {
        setMoviesList(result.Search);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="page-container">
      <Header />
      <div className="page-container__content">
        <div className="search-bar">
          <input
            className="search-bar__input"
            type="text"
            value={movieString}
            onChange={(e) => setmovieString(e.target.value)}
          />
          <button className="search-bar__btn" type="submit" onClick={getMovies}>
            Search
          </button>
        </div>
        <div className="movies-container">{moviesReturn()}</div>
      </div>
    </div>
  );
};

export default SearchPage;
