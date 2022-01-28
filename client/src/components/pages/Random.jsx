import React from 'react'
import { Card, Button } from 'react-bootstrap';

export const Random = () => {

  const handleClick = () => {
    //use Math.random to select a random workout
  }


  return (
    <div>
      <Card style={
      { width: '16rem',
        height: '10rem',
      }}>
  <Card.Body>
    <Card.Title>Dont know where to start? We can help</Card.Title>
    <Card.Text>
    </Card.Text>
    <Button variant='light' onClick={handleClick}>Random Exercise</Button>
    
  </Card.Body>
</Card>
    </div>
  )
}
export default Random;