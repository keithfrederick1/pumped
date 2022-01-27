import React from 'react'
import { Table, DropdownButton, Dropdown } from 'react-bootstrap';
// import WorkoutPlans from '../MyWorkoutPlans/WorkoutPlans'
/* Each cell in calendar table will have a dropdown menu that
displays workout plans that can be added to that day. */

const Calendar = () => {
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dropdownOptions = [
    { href: '#/action-1', description: 'I AM SPARTA'},
    { href: '#/action-2', description: 'Leg day'},
    { href: '#/action-3', description: 'Core day'},
  ]
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
      {week.map((day) => {
        return (<td>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button" size="sm" variant="info"
        title="Workout Plan">
        {dropdownOptions.map((options) => <Dropdown.Item href={options.href}>{options.description}</Dropdown.Item>)}
        </DropdownButton>
      </td>)
      })}
    </tr>
  </tbody>
  </Table>
  </div>
  )
}

export default Calendar
