import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const Search = () => {
  return (
      <div className="search-image-jumbotron">
      <div className="button-input">
    <InputGroup className="mb-3 button-input">
    <FormControl
      placeholder="Search for a Workout"
      aria-label="Workout Search"
      aria-describedby="workout-search-button"
    // value will be assigned to  searchInput variable
      //  value={searchInput}
      // //create event listener that uses setsearchInput  to set state to the value they input
      //  onChange={(e) => setsearchInput(e.target.value)}
    />
    <Button variant="outline-info" id="workout-search-button">
      Search
    </Button>
  </InputGroup>
  </div>
    </div>
  )
}

export default Search;
