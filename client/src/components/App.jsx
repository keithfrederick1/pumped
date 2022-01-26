import  React  from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import WorkoutLog from './pages/WorkoutLog/workoutLog.jsx';
import WorkoutComponent from './pages/WorkoutComponent/WorkoutComponent.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile/Profile.jsx';


function App()  {
  
  return(
  <div>
    
    <h1>P U M P</h1>

      
   
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/workout-log' element={<WorkoutLog />}/>
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
          {/* <WorkoutLog /> */}
          {/* <Profile /> */}
         
      <div>
          {/* <WorkoutComponent /> */}
      </div>
    </div>
  
);
        };
export default App;
