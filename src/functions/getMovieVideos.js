
const getMovieVideos = async function(movieID){
  try{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=19bdcbea0c866cc82a107ad48bb3bf5d&language=en-US`,{
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
      })
    const data = await response.json()

    // data.results returns list with many videos, we need to perform search to find only
    // Trailer video if it exists, otherwise we shouldn't display any other video...
    var video =""
    for(let i=0;i<data.results.length;i++){
     video= data.results[0].key
      if(data.results[i].type==="Trailer") video= data.results[i].key
    }
    return video
    }

  catch{
      alert("Something went wrong")
  }
}

export default getMovieVideos;
