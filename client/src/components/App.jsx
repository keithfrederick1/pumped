import  React  from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import WorkoutLog from './pages/WorkoutLog/workoutLog.jsx';
// import WorkoutComponent from './pages/WorkoutListPage/WorkoutComponent.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile/Profile.jsx';
import CreateWorkout from './pages/CreateWorkout/CreateWorkout.jsx';


function App()  {
  
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
          {/* <WorkoutLog /> */}
          {/* <Profile /> */}
          {/* <CreateWorkout/> */}

      <div>
          {/* <WorkoutComponent /> */}
      </div>
    </div>
  
);
        };
export default App;
