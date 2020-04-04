import React from 'react';
import { aboutKrisi } from '../constants/constants.js';

const About = () => {
  return (
    <>
      <div className="about">
        <p>I am a student at Wyncode</p>
      </div>
      <p> Story</p>
      <div>
        {aboutKrisi.map(({ name, picKrisi, linkedin }, index) => (
          <a
            key={index}
            className="poetrait-link"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="about-pic" src={picKrisi} alt={`${name}`} />
            <p>{name}</p>
          </a>
        ))}
      </div>
      <div classname="hr">
        <hr />
      </div>
    </>
  );
};

export default About;
