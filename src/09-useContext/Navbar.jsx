import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to={'/'}>
      use context
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className={({isActive})=> {return `nav-link ${isActive ? 'active':''} `}} to='/'>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=> {return `nav-link ${isActive ? 'active':''} `}} to='/about'>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=> {return `nav-link ${isActive ? 'active':''} `}} to='/login'>
            Login
          </NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>


            
            <Link ></Link>
            <Link ></Link>
            
        </>
    );
}

export default Navbar;
