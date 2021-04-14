import React from 'react';
import { Link } from 'react-router-dom';

import './MovieCard.css';

const MovieCard = ({ title, posterUrl, release, movieID }) => (
  <Link to={`movie/${movieID}`} className="movie-card-link">
    <div>
      <img className="movie-card__poster" src={posterUrl} alt={title} />
      <div className="movie-card-info">
        <h3 className="movie-card-info__title">{title}</h3>
        <p className="movie-card-info__release">{release}</p>
      </div>
    </div>
  </Link>
);

export default MovieCard;
