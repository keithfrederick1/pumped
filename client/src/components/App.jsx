import  React  from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import WorkoutLog from './pages/WorkoutLog/workoutLog.jsx';
import WorkoutComponent from './pages/WorkoutComponent/WorkoutComponent.jsx';
import Home from './pages/Home.jsx';
import axios from 'axios';



//when home page is rendered, make an axios get req to the api to dynamically render workout categories. youll need a context 

function App()  {
  //use effect is a hook that runs a function once a component is rendered

  //in this case you want to call  a function that makes a get request to the api for workout categories, using another hook to save the response data to pass down as props to the categories component to be dynamically rendered
  // useEffect(() => {

  // , []);
  
  return(
  <div>
    
    <h1>PUMP</h1>
    
        <Routes>
          <Route path='/workout-log' component={WorkoutLog}/>
          {/* <Route path='/my-workout-plans' component={WorkoutPlan}/>
          <Route path='/calendar' component={Calendar}/>
          <Route path='/workouts' component={Workouts}/>

          <Route path='/shoulders' component={Workouts}/>
          <Route path='/abs' component={Workouts}/>
          <Route path='/arms' component={Workouts}/>
          <Route path='/legs' component={Workouts}/>
          <Route path='/workouts' component={Workouts}/> */}
        </Routes>
          <Home />

      <div>
          <WorkoutComponent />
      </div>
    </div>
  
);
        };
export default App;
