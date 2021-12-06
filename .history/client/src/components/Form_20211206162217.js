import React, {useState} from "react";
import axios from 'axios';

const Search = ({  query, setQuery }) => {
const [clientId , setClientId] = useState('Aklz1n_jETRghrt2XDm-S6IJLkT1yYTesUx9zIarneQ');
const [result, setResults] = useState([]);
  const addCityHandler = (event) => {
    event.preventDefault();
    const input = document.querySelector("input");
    setQuery(input.value);
    const url = `https://api.unsplash.com/search/photos?page=1&per_page=1&orientation=landscape&query=${query}&client_id=${clientId}`
    axios.get(url)
    .then(response => {
    setResults(response.data.results);
    input.value='';
    })
  };
  return (
    <div>
    <form onSubmit={addCityHandler}>
      <input
        type="text"
        placeholder="Type a city.."
        className="form-control"
        id="city-input"
      />
      <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary w-100" />
      </div>
    </form>

   { result.map(photo => <img src={photo.urls.small}  alt='city'/>)}
       </div>
  );
};

export default Search;
