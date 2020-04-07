import React from 'react';
import { Link } from 'react-router-dom';
import ResumeButton from '../src/components/ResumeButton';

const Footer = () => {
  return (
    <div className="container_footer">
      <ul className="menu_footer">
        <li>
          <ResumeButton />
        </li>
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
