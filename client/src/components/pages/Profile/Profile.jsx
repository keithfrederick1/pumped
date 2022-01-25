import React from 'react'
import { Table, Button } from 'react-bootstrap';

//when user clicks profile on home page they should be redirected to a profile page that has a card with their username, created workouts, and workout plans
function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Username</th>
      <th>Created Workouts</th>
      <th>Workout Plans</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Keith</td>
      <td>Example</td>
      <td>Punisher</td>
    </tr>
  </tbody>
</Table>
    <Button variant="info">Edit</Button>
    </div>
  )
}

export default Profile
