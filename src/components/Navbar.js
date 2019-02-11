import React from 'react';
import {Link, NavLink} from 'react-router-dom';
 // so that we don't request the server and react itself handles the requests
 // use NavLink to add class = "active"
const Navbar = () => {
  return(
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <NavLink to= "/" className="brand-logo">Poke' Times</NavLink>
        <ul className="right">
          <li><NavLink to="/">Home</NavLink></li>
          <li><Link to='/about'>About</Link></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>

        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
