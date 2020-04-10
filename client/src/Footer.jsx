import React from 'react';
import ResumeButton from '../src/components/ResumeButton';
import SocialLinks from './components/SocialLinks';

const Footer = () => {
  return (
    <div className="containerFooter">
      <ul className="menuFooter">
        <li>
          <ResumeButton />
        </li>
        <li>
          <SocialLinks />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
