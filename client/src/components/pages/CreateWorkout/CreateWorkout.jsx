import React from 'react';
import { Form, Button } from 'react-bootstrap';

const handleClick = (e) => {
  //send post request to user account for their workouts
}

//create Workout should be an input field. You should save that input to the users workout log in the database. create a helper to achieve this, and call it on click of submit
const CreateWorkout = () => {
  return (
    
    <div>
      <h2>Make Your Own Exercise</h2>
      <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Exercise Name</Form.Label>
    <Form.Control type="email" placeholder="go crazy" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
<Button onClick={handleClick}>Submit</Button>
    </div>
  )
}

export default CreateWorkout
