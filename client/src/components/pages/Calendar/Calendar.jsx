import React from 'react';
import DayPlan from './DayPlan.jsx';
 import { useState, useEffect } from 'react'
import { Table, DropdownButton, Dropdown } from 'react-bootstrap';

// import WorkoutPlans from '../MyWorkoutPlans/WorkoutPlans'
/* Each cell in calendar table will have a dropdown menu that
displays workout plans that can be added to that day. When clicked, the workout plan 
is rendered in the next row and clicking that navigates the user to the workout plan 
view. */

const Calendar = () => {
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const defaultPlan = 'Day Off';
  const initialState = {'Monday': defaultPlan, 'Tuesday': defaultPlan, 'Wednesday': defaultPlan, 'Thursday': defaultPlan, 'Friday': defaultPlan, 'Saturday': defaultPlan, 'Sunday': defaultPlan};


  const dropdownOptions = [
    {id: 0, plan: defaultPlan},
    {id: 1, plan: 'I AM SPARTA'},
    {id: 2, plan: 'Leg day'},
    {id: 3, plan: 'Core day'},
  ]
  // Use state hook to set the workout plan to an element.
  const [workoutPlans, setWorkoutPlans] = useState({...initialState});

  // Using an object as state in react.
  const handleDropdownItemClick = (id, day) => {
    const newPlan = {...workoutPlans, [day]: id};
    return setWorkoutPlans(newPlan);
  };

  return (
  <div>
      <h2>Calendar</h2>
      <Table striped bordered hover>
    <thead>
      <tr>
        {week.map((day, i) =>
        <th key={day + i}>{day}</th>)}
      </tr>
    </thead>
  <tbody>
    <tr>
      {week.map((day, i) => {
        return (
        <td>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button" size="sm" variant="info"
          title="Workout Plan" key={day + i}>
          {dropdownOptions.map((option) => <Dropdown.Item onClick={() => handleDropdownItemClick(option.plan, day)} key={option.id}>{option.plan}</Dropdown.Item>)}
          </DropdownButton>
        </td>
      )
      })}
    </tr>
    <tr>
      {week.map((day, i) => <DayPlan plan={workoutPlans[day]} key={day + i}/>)}
    </tr>

  </tbody>
  </Table>
  </div>
  )
}

// hi
export default Calendar
