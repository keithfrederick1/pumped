import React, { useState } from 'react';
import axios from 'axios';
const CatContext = React.createContext();

const CatContextProvider = ({ children }) => {
  const [list, setList] =  useState([]);
  const [click, setClick] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [calendar, setCalendar] = useState({});
  const [userLog, setUserLog] = useState('');
 
  const browseClick = (id) => {
    //console.log(id);
     axios.get(`https://wger.de/api/v2/exercise/?language=2&?category=${id}&limit=100`)
      .then(({ data }) => {
        const { results } = data;
        let filteredExercises = results.filter((obj) => obj.category === id);
        //once we have filtered array, set state of list  to workouts from that category
        setList(filteredExercises);
        setClick(true);
        //console.log(filteredExercises);
      })
      .catch((err) =>  {
        console.log(err);
        setClick(false);
      })
      
   };

   const catProps = {
     workoutPlans,
     calendar,
     userLog,
     user,
     password,
     setPassword,
     user,
     setUser,
     click,
     setClick,
     list, 
     setList,
     browseClick
   }
   return <CatContext.Provider value={catProps}> 
     {children}
   </CatContext.Provider>
}

export { CatContextProvider, CatContext };