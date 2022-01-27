import React from 'react';
import { useState, useEffect } from 'react'
import { Table, DropdownButton, Dropdown } from 'react-bootstrap';
// import WorkoutPlans from '../MyWorkoutPlans/WorkoutPlans'
/* Each cell in calendar table will have a dropdown menu that
displays workout plans that can be added to that day. When clicked, the workout plan 
is rendered in the next row and clicking that navigates the user to the workout plan 
view. */

const Calendar = () => {
  // const week = [{ day: 'Monday', plan: 'Day Off'}, 
  // { day: 'Tuesday', plan: 'Day Off'},
  // { day: 'Wednesday', plan: 'Day Off'},
  // { day: 'Thursday', plan: 'Day Off'},
  // { day: 'Friday', plan: 'Day Off'},
  // { day: 'Saturday', plan: 'Day Off'},
  // { day: 'Sunday', plan: 'Day Off'}];


  const dropdownOptions = [
    { href: '#/action-1', plan: 'I AM SPARTA'},
    { href: '#/action-2', plan: 'Leg day'},
    { href: '#/action-3', plan: 'Core day'},
  ]
  // Use state hook to set the workout plan to an element.
  const [week, setWorkoutPlans] = useState([{ day: 'Monday', plan: 'Day Off'}, 
  { day: 'Tuesday', plan: 'Day Off'},
  { day: 'Wednesday', plan: 'Day Off'},
  { day: 'Thursday', plan: 'Day Off'},
  { day: 'Friday', plan: 'Day Off'},
  { day: 'Saturday', plan: 'Day Off'},
  { day: 'Sunday', plan: 'Day Off'}]);

  const handleDropdownItemClick = (e, i) => {
    return setWorkoutPlans(e.target.value)
  };


  return (
  <div>
      <h2>Calendar</h2>
      <Table striped bordered hover>
    <thead>
      <tr>
        {week.map((day, i) =>
        <th key={day.day + i}>{day.day}</th>)}
      </tr>
    </thead>
  <tbody>
    <tr>
      {week.map((day, i) => {
        return (
        <td>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button" size="sm" variant="info"
          title="Workout Plan" key={day.day + i}>
          {dropdownOptions.map((options, idx) => <Dropdown.Item onClick={(idx) => {handleDropdownItemClick(idx)}} href={options.href} key={options + idx}>{options.plan}</Dropdown.Item>)}
          </DropdownButton>
        </td>
      )
      })}
    </tr>
    <tr>
      {week.map((day, i) => (<td>{day.plan}</td>))}
    </tr>
  </tbody>
  </Table>
  </div>
  )
}

export default Calendar
