import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap';


//react routing is connected successfully for this component build it out


//should make a get request to the database for a list ofthe signed in user's workout Plans

//each plan list item should have a see more button that renders a WorkoutPLAN component for each of the workouts in a given plan
const WorkoutPlans = () => {

  const [plan, setPlan] = useState('')

  const handleChange = (e) => {

    setPlan(e.target.value);
    console.log(plan);
  }

  const submitWorkoutPlan = (name) => { 
    const planToSubmit = { name };
    return axios.post('/api/router/createWorkoutPlan', planToSubmit).then(() => {
      console.log('successful submit', 26)
      setPlan('');
    }).catch((err) => {
      console.warn(err);
    })
  }
  

  return (
    <div>
     <h2>Make Your Own Workout Plan</h2>
      <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Workout Plan Name</Form.Label>
    <Form.Control type="email" placeholder="go crazy" onChange={handleChange} value={plan}/>
  </Form.Group>
    </Form>
  <Button onClick={() => {submitWorkoutPlan(plan)}}>Submit</Button>
    </div>
  )
}


export default WorkoutPlans
