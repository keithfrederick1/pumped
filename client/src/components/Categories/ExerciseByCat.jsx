import React from 'react';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

/*when a user clicks a category on the home page, they should be redirected to a category page with all the workouts from that category listed
*/
const WorkoutComponent = ({item}) => {
  //use hooks for state management, take the props you need for workout name, description and an input are for intensity

   //use hooks for state management, take the props you need for workout name, description and an input are for intensity

  //create a context file to render the data  

  const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <div className="card-background">
      <h2>{item.name}</h2>
      <img  src="../images/Logo.png" style={
        { height: '18rem',
          borderRadius: '30px'
        }
      } alt="logo"/>
      <div className="card-button"> 
      <Button variant="info" onClick={handleShow}>
          See More
        </Button>
      </div>
  
        <Modal
        show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{item.name}</Modal.Title>
          </Modal.Header>
    <Modal.Body>{item.description.slice(3,-4)}</Modal.Body>
          <Modal.Footer>
            <Button variant="ouline-info"onClick={handleClose}>
              Close
            </Button>
            <Button variant="ouline-info"onClick={handleClose}>
              Add to Workout Plan
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default WorkoutComponent;
