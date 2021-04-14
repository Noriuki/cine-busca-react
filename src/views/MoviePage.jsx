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
          <div className="movie-page">
            <div className="movie-column">
              <div className="movie-info-misc">
                <div className="movie-info-misc__field">
                  <h4>Release Date</h4>
                  <p>{movie.Year}</p>
                </div>
                <div className="movie-info-misc__field">
                  <h4>Genre</h4>
                  <p>{movie.Genre}</p>
                </div>
                <div className="movie-info-misc__field">
                  <h4>Director</h4>
                  <p>{movie.Director}</p>
                </div>
              </div>
              <p className="movie-info__label"> Movie Casting </p>
              <div className="movie-casting">
                <h4 className="movie-info__casting">{movie.Actors}</h4>
              </div>
            </div>
            <div className="movie-column">
            <img
              className="movie-info__poster"
              src={movie.Poster}
              alt={movie.Title}
              />
            </div>
          </div>
        </div>
        <p className="movie-info__label"> <strong>Movie Plot</strong> </p>
        <div className="movie-info__plot">
          <h4>{movie.Plot}</h4>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
