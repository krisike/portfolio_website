import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const toggleMenu = e => {
  let currHeight = e.target.parentElement.style.height;
  e.target.parentElement.style.height = currHeight === 'auto' ? '40px' : 'auto';
};

console.log(e.target);

const Navigation = () => {
  return (
    <div>
      <nav className="containerNav">
        <span className="headerTitle">Krisi Keranova</span>
        <ul id="nav" className="topnav">
          <li>
            <Link to="/" className="menu">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="menu">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="menu">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="menu">
              Contact
            </Link>
          </li>

          <li className="h-menu" onClick={toggleMenu}>
            <i id="nav" className="fa fa-bars"></i>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
