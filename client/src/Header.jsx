import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container_nav">
      <ul className="menu">
        <li>
          <Link to="/about" className="about_link">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="projects_link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="contact_link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
