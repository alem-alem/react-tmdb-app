
const getMovieDetails = async function(movieID){
  try{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=19bdcbea0c866cc82a107ad48bb3bf5d&language=en-US`,{
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
      })
    const data = await response.json()
    return data
    }
  catch{
      alert("Something went wrong")
  }
}
export default getMovieDetails;
