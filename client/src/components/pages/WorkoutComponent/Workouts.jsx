import React from 'react'
import WorkoutComponent from './WorkoutComponent.jsx';


//ths function will make an axios request to retrieve a list of 200 workouts to choose from. Mapping thru that list and creating a WorkoutComponent for each
function Workouts() {
  return (
    <div>
      <WorkoutComponent />
    </div>
  )
}

export default Workouts;
