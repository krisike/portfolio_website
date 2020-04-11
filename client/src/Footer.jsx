import React from 'react';
import ResumeButton from '../src/components/ResumeButton';
import SocialLinks from './components/SocialLinks';

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="menuFooter">
        <SocialLinks />
        <ResumeButton />
      </div>
    </div>
  );
};

export default Footer;
