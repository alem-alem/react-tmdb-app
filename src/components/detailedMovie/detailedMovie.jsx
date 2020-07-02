import React,{useState,useEffect} from 'react';
import './detailedMovie.css';
import getMovieDetails from '../../functions/getMovieDetails.js';
import getTVshowDetails from '../../functions/getTVshowDetails.js';
import getMovieVideos from '../../functions/getMovieVideos.js';
import getTVshowVideo from '../../functions/getTVshowVideos.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DetailedMovie = props => {
      useEffect(()=>{
        props.isMovie===true?movieCaller() : tvShowCaller()
      },[])

      const movieCaller= async()=>{
        const details= await getMovieDetails(props.match.params.id)
        const video = await getMovieVideos(props.match.params.id)
        setData(details)
        setVideo(video)
      }

      const tvShowCaller= async()=>{
        const details= await getTVshowDetails(props.match.params.id)
        const video = await getTVshowVideo(props.match.params.id)
        setData(details)
        setVideo(video)
      }

      const [data,setData] =useState([])
      const [video,setVideo] =useState()

  return(
  <div className="detailed-container">
        <div className="detailed-back" onClick={() => props.history.goBack()}>
          <FontAwesomeIcon icon='arrow-left' size='2x'></FontAwesomeIcon>
          <span style={{fontSize:'22px'}}>Back</span> </div>

        {video!==""?
          <iframe title={video} className="detailed-img" src={`https://www.youtube.com/embed/${video}`} frameborder="0"
         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
           </iframe>
           :
        <img className="detailed-img" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={`${[props.isMovie===true?data.title:data.name]} cover`}/>
      }
        <div className="detailed-title">Title: {props.isMovie===true?data.title:data.name}</div>
        <div className="detailed-title">Rating: {data.vote_average} </div>
        <div className="detailed-overview"><span>Overview:</span> {data.overview}</div>

  </div>
);}

export default DetailedMovie;
