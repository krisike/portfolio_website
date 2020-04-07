import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="containerNav">
      <div className="headerTitle">Krisi Keranova</div>
      <div>
        <ul className="menu">
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
