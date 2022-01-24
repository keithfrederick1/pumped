import React from 'react';
import AppNavbar from './Navbar/Navbar.jsx';
import Search from './Search.jsx';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Categories from './Categories/Categories.jsx';
import WorkoutLog from './pages/WorkoutLog/workoutLog.jsx';
import WorkoutComponent from './pages/WorkoutComponent/WorkoutComponent.jsx';



//when home page is rendered, make an axios get req to the api to dynamically render workout categories. youll need a context 

const App = () => (
  <div>
    
    <h1>PUMPED</h1>
    <AppNavbar />
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
    <Search />
    <Categories />

      <div>
          <WorkoutComponent />
      </div>
    </div>
  
);
export default App;
