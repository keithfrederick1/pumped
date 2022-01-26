import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './styles.css';
import axios from  'axios';
import { useState } from 'react';


const CategoryCard = ({ category })  => {
  
    const [list, setList] =  useState([]);

//console.log(category.id);

//on click of browse category, an axios get request should be made to the backend with the category id as a parameter

   const handleClick = () => {
     let { id } = category;

    axios.get('/api/router/workoutsByCategory')
      .then(({ data: { results } }) => {
        
        let filteredExercises = results.filter((obj) => obj.category === id);
        //once we have filtered array, set state of list  to workouts from that category
        setList(filteredExercises);
      })
      .catch((err) =>  {
        console.log(err);
      })
      
   }

  return (
    <div className="category-card">
    <Card style={{ width: '20rem',
     }}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
    <Card.Body>
  <Card.Title>{category.name}</Card.Title>
      <Button  variant="outline-info" onClick={handleClick}>Browse Category</Button>
    </Card.Body>
  </Card>
  </div>
  )
}

export default CategoryCard;
