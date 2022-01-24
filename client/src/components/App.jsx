import React from 'react';
import AppNavbar from './Navbar/Navbar.jsx';
import Search from './Search.jsx';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Categories from './Categories/Categories.jsx';
import workoutLog from './pages/WorkoutLog/workoutLog.jsx';

const App = () => (
  <div>
    
    <h1>PUMPED</h1>
    <AppNavbar />
        <Routes>
          <Route path='/workout-log' component={workoutLog}/>
          {/* <Route path='/my-workout-plans' component={WorkoutPlan}/>
          <Route path='/calendar' component={Calendar}/>
          <Route path='/workouts' component={Workouts}/>

          <Route path='/shoulders' component={Workouts}/>
          <Route path='/abs' component={Workouts}/>
          <Route path='/arms' component={Workouts}/>
          <Route path='/legs' component={Workouts}/>
          <Route path='/workouts' component={Workouts}/> */}
        </Routes>
    <Search />
    <Categories />
    </div>
  
);
export default App;
