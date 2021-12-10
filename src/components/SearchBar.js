import React from "react";

function SearchBar() {
  return (
    <div className="searchbar">
      <br></br>
      <label htmlFor="search">Search Dogs : </label>
      <input
        type="text"
        id="searchBar"
        placeholder="Type to search.."
        
      />
    </div>
  );
}


export default SearchBar;