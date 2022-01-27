import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import Workouts from './pages/WorkoutComponent/Workouts.jsx';

const Search = () => {

  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const handleSearch = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    
  };
  console.log(list);
  const searchWorkouts = () => {

    console.log('clicked');
    axios.get('/api/router/searchWorkouts')
      .then(({data}) => {
        console.log(data);
        let filteredExercises = data.filter((obj) => {
          return obj.name.toUpperCase().includes(input.toUpperCase())
        })
        setList(filteredExercises);

      })

  }
  return (
      <div className="search-image-jumbotron">
      <div className="button-input">
    <InputGroup className="mb-3 button-input">
    <FormControl
      placeholder="Search for a Workout"
      aria-label="Workout Search"
      aria-describedby="workout-search-button"
      onChange={handleSearch}
    // value will be assigned to  searchInput variable
      //  value={searchInput}
      // //create event listener that uses setsearchInput  to set state to the value they input
      //  onChange={(e) => setsearchInput(e.target.value)}
    />
    <Button variant="outline-info" id="workout-search-button" onClick={searchWorkouts}>
      Search
    </Button>
  </InputGroup>
  <Workouts list={list}/>
  </div>
    </div>
  )
}

export default Search;
