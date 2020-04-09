import React from 'react';
// import { Link } from 'react-router-dom';
import ResumeButton from '../src/components/ResumeButton';

const Footer = () => {
  return (
    <div className="containerFooter">
      <ul className="menuFooter">
        <li>
          <ResumeButton />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
