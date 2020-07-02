import React from 'react';
import './searchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = props => {
      const updateSearch = e => props.changeSearch(e.target.value)


  return(
  <form className="search-bar">
  <div className="search-icon"><FontAwesomeIcon icon='search' size='1x'></FontAwesomeIcon> </div>
      <input onChange={updateSearch}  className="search-input" type="text" placeholder="search" value={props.search}/>
  </form>
);}

export default SearchBar;
