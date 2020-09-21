import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/jyr">A화면</NavLink>
          </li>
          <li>
            <NavLink to="/bhj">B화면</NavLink>
          </li>
          <li>
            <NavLink to="/kkm">A화면</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
