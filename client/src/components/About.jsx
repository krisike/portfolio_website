import React from 'react';
import { aboutKrisi } from '../constants/constants.js';

const About = () => {
  return (
    <>
      <div className="about">
        <p>
          A web developer with enthusiasm and team spirit eager to contribute to
          the tech world. An environmental activist and social media zealot
          along the way.
        </p>
      </div>
      <div className="aboutName">
        {aboutKrisi.map(({ name, picKrisi, linkedin }, index) => (
          <a
            key={index}
            className="portrait-link"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="about-pic" src={picKrisi} alt={`${name}`} />
            <p className="aboutName">{name}</p>
          </a>
          // <a href="https://www.instagram.com/zerowasteearth/">
          // <img title="Instagram" alt="RSS" src="https://socialmediawidgets.files.wordpress.com/2014/03/10_instagram.png" width="35" height="35" />
          // </a>
        ))}
      </div>
    </>
  );
};

export default About;
