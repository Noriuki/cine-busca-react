import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './MoviePage.css';

import Header from '../components/Header';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=433de550`, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((result) => {
        setMovie(result);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="page-container">
      <Header />
      <div className="page-container__content">
        <div className="movie-info">
          <h1 className="movie-info__title">{movie.Title}</h1>
          <div className="movie-info-misc">
            <div className="movie-info-misc__field">
              <p>Release Date</p>
              <p>{movie.Year}</p>
            </div>
            <div className="movie-info-misc__field">
              <p>Genre</p>
              <p>{movie.Genre}</p>
            </div>
            <div className="movie-info-misc__field">
              <p>Director</p>
              <p>{movie.Director}</p>
            </div>
          </div>
          <img className="movie-info__poster" src={movie.Poster} alt={movie.Title} />
          <p className="movie-info__label"> Movie Casting </p>
          <h4 className="movie-info__casting">{movie.Actors}</h4>
          <p className="movie-info__label"> Movie Plot </p>
          <div className="movie-info__plot">
            <h3>{movie.Plot}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
