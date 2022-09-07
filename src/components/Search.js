import React from "react";

function Search({onChangeSki,search}) {
  function handleSearch (event){
    onChangeSki(event.target.value);

  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt"value={search} onChange={handleSearch} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
