import React from 'react';
import { aboutKrisi } from '../constants/constants.js';

const About = () => {
  return (
    <>
      <div className="hr">
        <hr />
      </div>
      <div className="about">
        <p>
          A web developer with enthusiasm and team spirit eager to contribute to
          the tech world. An environmental activist and social media zealot
          along the way.
        </p>
      </div>
      <div>
        {aboutKrisi.map(({ name, picKrisi, linkedin }, index) => (
          <a
            key={index}
            className="portrait-link"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="about-pic" src={picKrisi} alt={`${name}`} />
            <p>{name}</p>
          </a>
        ))}
      </div>
      <div className="hr">
        <hr />
      </div>
    </>
  );
};

export default About;
