import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import ButtonContainer from './components/buttonContainer/buttonContainer.jsx';
import SearchBar from './components/searchBar/searchBar.jsx';
import MovieContainer from './components/movieContainer/movieContainer.jsx';
import DetailedMovie from './components/detailedMovie/detailedMovie.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faSearch} from '@fortawesome/free-solid-svg-icons';
  // add fontawesome icons for search and back button to the library, so they can be used in other files...
library.add(faArrowLeft, faSearch)

function App() {

  const [isMovie, setIsMovie] = useState(false)
  const changeIsMovie = (arg) =>setIsMovie(arg)
  const [list,setList] = useState([])
  const changeList = (arg) =>setList(arg)
  const [search,setSearch] = useState("")
  const changeSearch = (arg) => setSearch(arg)

  return (
<Router>
    <div className="App">
      <div className="app-container">
        <Switch>
        <Route path='/' exact render={props =>
              <React.Fragment>
                  <ButtonContainer change={changeIsMovie} isMovie={isMovie}/>
                  <SearchBar changeList={changeList} list={list} changeSearch={changeSearch} search={search}/>
                  <MovieContainer isMovie={isMovie} changeList={changeList} list={list} search={search} />
              </React.Fragment>  }/>
        <Route path='/tvshow/:id' exact render={props=> <DetailedMovie isMovie={isMovie} {...props}/>} />
        <Route path='/movie/:id' exact render={props=> <DetailedMovie isMovie={isMovie} {...props}/>} />
        </Switch>
      </div>
    </div>
</Router>
  );
}

export default App;
