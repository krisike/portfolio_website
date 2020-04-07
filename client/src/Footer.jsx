import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container_nav">
      <ul className="menu">
        <li>
          <Link to="/contact" className="contact_link">
            Get in Touch
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
