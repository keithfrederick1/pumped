import React from 'react'
import { Form, Button } from 'react-bootstrap';


//react routing is connected successfully for this component build it out


//should make a get request to the database for a list ofthe signed in user's workout Plans

//each plan list item should have a see more button that renders a WorkoutPLAN component for each of the workouts in a given plan
const WorkoutPlans = () => {
  return (
    <div>
     <h2>Make Your Own Workout Plan</h2>
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

export default WorkoutPlans
