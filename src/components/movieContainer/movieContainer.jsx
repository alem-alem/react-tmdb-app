import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import './movieContainer.css';
import Movie from '../movie/movie.jsx';
import getTopRatedTV from '../../functions/getTopRatedTV.js';
import getTopRatedMovie from '../../functions/getTopRatedMovie.js';
import searchMovies from '../../functions/searchMovies.js';
import searchTVshow from '../../functions/searchTVshow.js';

const MovieContainer = props => {

    useEffect( ()=>{    // This code will fire request one second after user stop typing
    if(props.search.length>=3){
      const timer = setTimeout(() => callSearch(), 1000);
    return () => clearTimeout(timer);
  }  // this will fire request immediately if there are less than 3 words in searchBar
   else callTopRated()
  },[props.isMovie,props.search])

  const callTopRated= async ()=>{
    const list = props.isMovie===true&&props.search.length<3? await getTopRatedMovie()
                : await getTopRatedTV()
    props.changeList(list.slice(0,10))
  }

  const callSearch= async()=>{
    const list= props.isMovie===true&&props.search.length>=3? await searchMovies(props.search)
     : await searchTVshow(props.search)
      props.changeList(list.slice(0,10))
  }

  return(
  <div className="movie-container">
    {props.isMovie===true&&props.search.length<3?
    props.list.map(li=>(
      <Link className="movie-link" to={`/movie/${li.id}`} key={li.id}>
        <Movie src={`https://image.tmdb.org/t/p/w500${li.poster_path}`} name={li.title}/>
      </Link>
    ))
    : props.isMovie===false&&props.search.length<3?
    props.list.map(li=>(
      <Link className="movie-link" to={`/tvshow/${li.id}`} key={li.id}>
        <Movie src={`https://image.tmdb.org/t/p/w500${li.poster_path}`} name={li.name}/>
      </Link>
    ))
    : props.isMovie===true&&props.search.length>=3&&props.list.length>=1?
    props.list.map(li=>(
      <Link className="movie-link" to={`/movie/${li.id}`} key={li.id}>
        <Movie src={`https://image.tmdb.org/t/p/w500${li.poster_path}`} name={li.title}/>
      </Link>
    ))
    : props.isMovie===false&&props.search.length>=3&&props.list.length>=1?
    props.list.map(li=>(
      <Link className="movie-link" to={`/tvshow/${li.id}`} key={li.id}>
        <Movie src={`https://image.tmdb.org/t/p/w500${li.poster_path}`} name={li.name}/>
      </Link>
    ))
    : <div className="no-search"> There are no results for that term in our database </div>
  }

  </div>
);}

export default MovieContainer;
