import React from 'react';
// import Search from '../Search.jsx';
import Categories from '../Categories/Categories.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

//when home page is rendered, make an axios get req to the api to dynamically render workout categories. youll need a context 

const Home = () => {
//useState is a react hook that assigns context, its assigned to an array: [itemInState, functonToCallForChangingThatState] = useState([...etc])
  const [categories, setCategories] = useState([]);


  //use effect is a hook that runs a function once a component is rendered

  //in this case you want to call  a function that makes a get request to the api for workout categories, using another hook to save the response data to pass down as props to the categories component to be dynamically rendered
  useEffect(() => {
    axios.get('https://wger.de/api/v2/exercisecategory/')
      .then(({ data }) => {
        //the array of category objects is recognized as data.data.results, so I descructured data from response

        //console.log(data.results);

        // use the response to set state of categories and pass down to categories component
       
        setCategories(data.results);
        
      })
      .catch((err) => {
        console.error(err);
      });
    }, []);
  
  return (
    <div>
      {/* <Search /> */}
      <div className="search-image-jumbotron"></div>
        <h2 className='title'>C A T E G O R I E S</h2>
      <Categories categories={categories}/>
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
