import  React  from 'react';
import { Route, Routes, } from 'react-router-dom';
import WorkoutLog from './pages/WorkoutLog/workoutLog.jsx';
import WorkoutComponent from './pages/WorkoutComponent/WorkoutComponent.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile/Profile.jsx';
import WorkoutPlans from './pages/MyWorkoutPlans/WorkoutPlans.jsx';
import Workouts from './pages/WorkoutComponent/Workouts.jsx';
import Calendar from './pages/Calendar/Calendar.jsx';
import LoginSignUp from './pages/Login/Signup.jsx/LoginSignUp.jsx';

function App()  {
  
  return(
  <div>
    
    <h1>P U M P</h1>

      
   
        <Routes>
          <Route path='/login' element={<LoginSignUp />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/workout-plans' element={<WorkoutPlans />}/>
          <Route path='/workout-log' element={<WorkoutLog />}/>
          <Route path='/calendar' element={<Calendar />}/>
          <Route path='/workouts' element={<Workouts />}/>
            {/*
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
