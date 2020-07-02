
const getTopRatedTV = async function(){
  try{
    const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=19bdcbea0c866cc82a107ad48bb3bf5d&language=en-US&page=1`,{
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
export default getTopRatedTV;
