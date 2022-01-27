import React from 'react'
import { useState, useEffect } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import WorkoutComponent from './WorkoutComponent.jsx';
import axios from 'axios';

//ths function will make an axios request to retrieve a list of 200 workouts to choose from. Mapping thru that list and creating a WorkoutComponent for each
const Workouts = () => {
  const [list, setList] = useState([])
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setInput(e.target.value);

  };

  const workoutList = () => {
    axios.get('/api/router/searchWorkouts')
      .then(({ data }) => {
        setList(data);
      })
  }

  useEffect(() => {
    workoutList();
  }, [])

  const searchWorkouts = () => {
    console.log('clicked');
    axios.get('/api/router/searchWorkouts')
      .then(({ data }) => {
        let filteredExercises = data.filter((obj) => {
          return obj.name.toUpperCase().includes(input.toUpperCase())
        })
        setList(filteredExercises);

      })

  }
  return (
    <div>
      <div className="search-image-jumbotron">
        <div className="button-input">
          <InputGroup className="mb-3 button-input">
            <FormControl
              placeholder="Search for a Workout"
              aria-label="Workout Search"
              aria-describedby="workout-search-button"
              onChange={handleSearch}
            />
            <Button
              variant="outline-info"
              id="workout-search-button"
              onClick={searchWorkouts}>
              Search
            </Button>
          </InputGroup>
        </div>
      </div>
      {list.map(item => <WorkoutComponent item={item} />)}

    </div>
  )
}

export default Workouts;
