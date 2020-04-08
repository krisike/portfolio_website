import React from 'react';
import { Link } from 'react-router-dom';
import { Resume } from '../assets/';

const ResumeButton = () => (
  <Link to={Resume} target="_blank" download>
    <button className="resumeButton">Download Resume</button>
  </Link>
);

export default ResumeButton;
