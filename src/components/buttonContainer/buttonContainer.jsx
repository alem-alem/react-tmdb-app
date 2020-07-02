import React from 'react';
import './buttonContainer.css';

const ButtonContainer = props => {

    const firstClickHandler = () => props.change(true)
    const secondClickHandler = () => props.change(false)

    return(
  <div className="btn-container">
          <button onClick={firstClickHandler}
            className={props.isMovie===false?"btn":"btn btn-active"}>Movies</button>

          <button onClick={secondClickHandler}
             className={props.isMovie===false?"btn btn-active":"btn"}>TV Shows</button>
  </div>
);}

export default ButtonContainer;
