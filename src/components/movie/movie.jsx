import React from 'react';
import './movie.css';

const Movie = props => (
  <div className="movie">
        <img className="movie-image" src={props.src} alt={`${props.name} cover`}/>
        <div className="movie-title"> {props.name}</div>
  </div>
);

export default Movie;
