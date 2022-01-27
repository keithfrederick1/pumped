import React from 'react'
import { Table, DropdownButton, Dropdown } from 'react-bootstrap';
// import WorkoutPlans from '../MyWorkoutPlans/WorkoutPlans'
/* Each cell in calendar table will have a dropdown menu that
displays workout plans that can be added to that day. */
function Calendar() {

  return (
    <div>
      <h2>Calendar</h2>
      <Table striped bordered hover>
      <thead>
    <tr>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
      <th>Thursday</th>
      <th>Friday</th>
      <th>Saturday</th>
      <th>Sunday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><DropdownButton id="dropdown-basic-button" title="Dropdown button" size="sm" variant="info"
        title="Workout Plan">
  <Dropdown.Item href="#/action-1">I AM SPARTA!</Dropdown.Item>
</DropdownButton></td>
      <td><DropdownButton id="dropdown-basic-button" title="Dropdown button" size="sm" variant="info"
        title="Workout Plan">
  <Dropdown.Item href="#/action-3">Smoke on the Squatter</Dropdown.Item>
</DropdownButton></td>
      <td><DropdownButton id="dropdown-basic-button" title="Dropdown button" size="sm" variant="info"
        title="Workout Plan">
  <Dropdown.Item href="#/action-1">I AM SPARTA!</Dropdown.Item>
</DropdownButton></td>
      <td><DropdownButton id="dropdown-basic-button" title="Dropdown button" size="sm" variant="info"
        title="Workout Plan">
  <Dropdown.Item href="#/action-2">America's Ass</Dropdown.Item>
</DropdownButton></td>
      <td><DropdownButton id="dropdown-basic-button" title="Dropdown button" size="sm" variant="info"
        title="Workout Plan">
  <Dropdown.Item href="#/action-3">Smoke on the Squatter</Dropdown.Item>
</DropdownButton></td>
      <td><DropdownButton id="dropdown-basic-button" title="Dropdown button" size="sm" variant="info"
        title="Workout Plan">
  <Dropdown.Item href="#/action-3">Smoke on the Squatter</Dropdown.Item>
</DropdownButton></td>
      <td><DropdownButton id="dropdown-basic-button" title="Dropdown button" size="sm" variant="info"
        title="Workout Plan">
  <Dropdown.Item href="#/action-1">I AM SPARTA!</Dropdown.Item>
</DropdownButton></td>

    </tr>
  </tbody>
  </Table>
    </div>
  )
}

// hi
export default Calendar
