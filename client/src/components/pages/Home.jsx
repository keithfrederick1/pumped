import React from 'react'


const Home = () => {
  return (
    <div style={{
      display: 'flex',
     justifyContent: 'center',
      alignItems: 'center', 
      height: '90vh'
      }}>
      <h1>Home</h1> 
    </div>
  )
};
//**********************reference this************ */



// import { createContext, useState } from 'react';

// export const MyContext = createContext();

// function AppContext({ children }) {
//   const [meals, setMeals] = useState([]);


//   return <MyContext.Provider value={{ meals, setMeals }}>{children}</MyContext.Provider>
// //all the  chiildren of thid "provider" will have access to this  context^^ 
// //by using AppContext to wrap everything in app.js, you effectively pass props down without having to use something like redux
// }

// export default AppContext;

export default Home;
