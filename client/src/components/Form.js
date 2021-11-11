import React from 'react';


const Search = ({ setQuery }) => {

   const addCityHandler = (event) => {
      event.preventDefault()
      const input = document.querySelector('input')
      setQuery(input.value);
   }

return(<form id="search-form" className="mb-3" onSubmit={addCityHandler}>
<div className="row">
  <div className="col-9">
    <input
      type="text"
      placeholder="Type a city.."
      className="form-control"
      id="city-input"
    />
  </div>
  <div className="col-3">
    <input
      type="submit"
      value="Search"
      className="btn btn-primary w-100"
    />
  </div>
</div>
</form>)
}


export default Search;