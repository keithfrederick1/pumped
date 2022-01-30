import  React  from 'react';
import { Route, Routes, Navigate,} from 'react-router-dom';
import WorkoutLog from './pages/WorkoutLog/workoutLog.jsx';
import WorkoutComponent from './pages/WorkoutComponent/WorkoutComponent.jsx';
import Home from './pages/Home.jsx';
import AppNavbar from './Navbar/Navbar.jsx'
import Profile from './pages/Profile/Profile.jsx';
import WorkoutPlans from './pages/MyWorkoutPlans/WorkoutPlans.jsx';
import Workouts from './pages/WorkoutComponent/Workouts.jsx';
import Calendar from './pages/Calendar/Calendar.jsx';
import Signin from './pages/Profile/Signin.jsx';

const App = () => (
  <div>
    <h1>P U M P</h1>
    <AppNavbar />
       <Routes>
          {/* // trying to redirect no route to home route */}
          <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/workout-plans' element={<WorkoutPlans />}/>
          <Route path='/workout-log' element={<WorkoutLog />}/>
          <Route path='/calendar' element={<Calendar />}/>
          <Route path='/workouts' element={<Workouts />}/> 
          <Route path='/signin' element={<Signin />}/>
        </Routes>
    </div>
);
export default App;
