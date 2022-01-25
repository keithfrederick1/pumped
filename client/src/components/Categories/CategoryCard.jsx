import React from 'react';
import { Card, Button } from 'react-bootstrap';
//import './styles.css';

function CategoryCard({ category }) {
  return (
    <Card className="category-card" style={{ width: '18rem',
     }}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
    <Card.Body>
  <Card.Title>{category.name}</Card.Title>
      <Button variant="outline-info">Browse Category</Button>
    </Card.Body>
  </Card>
  )
}

export default CategoryCard;
