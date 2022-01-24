import React from 'react'
import { Card, Button } from 'react-bootstrap';


//when the home page loads, you want a category component to be rendered for each category. that consists of an image with a button that links

//category card

//categories should come from database, mapping through them all. For now, won't dynamically render
const Categories = () => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src={strMealThumb} /> */}
    <Card.Body>
      <Card.Title>Shoulders</Card.Title>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src={strMealThumb} /> */}
    <Card.Body>
      <Card.Title>Abs</Card.Title>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src={strMealThumb} /> */}
    <Card.Body>
      <Card.Title>Arms</Card.Title>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src={strMealThumb} /> */}
    <Card.Body>
      <Card.Title>Legs</Card.Title>
    </Card.Body>
  </Card>
  <Card.Body>
      <Card.Title>Back</Card.Title>
    </Card.Body>
  </div>
  )
}

export default Categories;
