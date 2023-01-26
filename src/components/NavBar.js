import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <nav>
        <h3>NAV BAR</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Application">Application</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
