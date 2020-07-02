
const searchMovies = async function(query){
  try{
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=19bdcbea0c866cc82a107ad48bb3bf5d&
      language=en-US&query=${query}&page=1&include_adult=false`,{
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
      })
    const data = await response.json()
    return data.results
    }
  catch{
      alert("Something went wrong")
  }
}
export default searchMovies;
