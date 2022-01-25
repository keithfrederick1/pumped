import React from 'react'
import { Form, Button } from 'react-bootstrap';

//create Workout should be an input field. You should save that input to the users workout log in the database. create a helper to achieve this, and call it on click of submit
function CreateWorkout() {
  return (
    <div>
      <h2>Create a New Workout</h2>
      <Form>
  <fieldset disabled>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledTextInput"></Form.Label>
      <Form.Control id="disabledTextInput" placeholder="Title" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledTextInput"></Form.Label>
      <Form.Control id="disabledTextInput" placeholder="Description" />
    </Form.Group>
    <Form.Group className="mb-3">
    </Form.Group>
    <Button  variant="info" type="submit">Submit</Button>
  </fieldset>
</Form>
</div>


  )
}
//render a list of the user's workout plans under, each with buttons that allow them to add the new workout to a given plan
export default CreateWorkout;
