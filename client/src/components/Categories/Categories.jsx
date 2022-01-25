import React from 'react'
import CategoryCard from './CategoryCard.jsx';
// import "./styles.css";


//when the home page loads, you want a category component to be rendered for each category. that consists of an image with a button that links

//category card

//categories should come from database, mapping through them all. For now, won't dynamically render
const Categories = ({ categories }) => {
  return (
    <div className='category-container'>

      {categories.map((category) => <CategoryCard category={category} />)}
    
  
  </div>
  )
}

// <Card style={{ width: '18rem' }}>
//     {/* <Card.Img variant="top" src={strMealThumb} /> */}
//     <Card.Body>
//       <Card.Title>Abs</Card.Title>
//     </Card.Body>
//   </Card>
//   <Card style={{ width: '18rem' }}>
//     {/* <Card.Img variant="top" src={strMealThumb} /> */}
//     <Card.Body>
//       <Card.Title>Arms</Card.Title>
//     </Card.Body>
//   </Card>
//   <Card style={{ width: '18rem' }}>
//     {/* <Card.Img variant="top" src={strMealThumb} /> */}
//     <Card.Body>
//       <Card.Title>Chest</Card.Title>
//     </Card.Body>
//   </Card>
//   <Card style={{ width: '18rem' }}>
//     <Card.Body>
//       <Card.Title>Back</Card.Title>
//     </Card.Body>
//   </Card>
//   <Card style={{ width: '18rem' }}>
//     <Card.Body>
//       <Card.Title>Quads</Card.Title>
//     </Card.Body>
//   </Card>
//   <Card style={{ width: '18rem' }}>
//     <Card.Body>
//       <Card.Title>Hamstrings</Card.Title>
//     </Card.Body>
//   </Card>
//   <Card style={{ width: '18rem' }}>
//     <Card.Body>
//       <Card.Title>Calves</Card.Title>
//     </Card.Body>
//   </Card>
    
export default Categories;
