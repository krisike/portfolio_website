import React from 'react';
import { aboutKrisi } from '../constants/constants.js';
// import ResumeButton from '../components/ResumeButton';

const About = () => {
  return (
    <div className="aboutName">
      {aboutKrisi.map(({ name, picKrisi, linkedin, aboutme }, index) => (
        <>
          <div className="aboutPageContainer">
            <div className="aboutPageTopDescription">
              <p>{aboutme}</p>
            </div>
            <a
              key={index}
              className="portrait-link"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="about-pic" src={picKrisi} alt={`${name}`} />
              <p className="aboutMyName">{name}</p>
            </a>
          </div>
        </>
      ))}
    </div>
  );
};

export default About;
