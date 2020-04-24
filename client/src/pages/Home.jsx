import React from 'react';
import { aboutKrisi } from '../constants/constants.js';
require('../styling/Home.css');

const Home = () => {
  return (
    <div className="aboutName">
      {aboutKrisi.map(({ name, picKrisi, linkedin, aboutme }) => (
        <>
          <div className="homeContainer">
            <div className="aboutPageTopDescription">
              <p>{aboutme}</p>
            </div>
            <a
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

export default Home;
