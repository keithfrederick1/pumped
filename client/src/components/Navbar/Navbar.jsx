import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

function Navbar() {
  return (
    <div>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/workout-plans" activestyle="true">
            My Workout Plans
          </NavLink>
          <NavLink to="/workout-log" activestyle="true">
            My Workout Log
          </NavLink>
          <NavLink to="/categories" activestyle="true">
            Categories
          </NavLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/workout-plans'></NavBtnLink>
        </NavBtn> */}
      </Nav>
    </div>
  )
}

export default Navbar;
