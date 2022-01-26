import React from 'react';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
/*when a user clicks a category on the home page, they should be redirected to a category page with all the workouts from that category listed
*/
const WorkoutComponent = () => {
  //use hooks for state management, take the props you need for workout name, description and an input are for intensity

   //use hooks for state management, take the props you need for workout name, description and an input are for intensity

  //create a context file to render the data  

  const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  

  return (
    <div>
      <h2>Workout</h2>
      {/* <Button variant="info" onClick={handleShow}>
          See More
        </Button>
  
        <Modal
        show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Workout Name</Modal.Title>
          </Modal.Header>
    <Modal.Body>Workout Description</Modal.Body>
          <Modal.Footer>
            <Button variant="ouline-info"onClick={handleClose}>
              Close
            </Button>
            <Button variant="ouline-info"onClick={handleClose}>
              Add to Workout Plan
            </Button>
          </Modal.Footer>
        </Modal> */}
    </div>
  )
}

export default WorkoutComponent;
