import React from 'react';
import { aboutKrisi } from '../constants/constants.js';

const About = () => {
  return (
    <>
      <div className="about">
        <p>
          A web developer with enthusiasm and team spirit eager to contribute to
          the tech world. I enjoy learning and working in both front and backend
          because the creativity can be seen in different ways. I love yoga,
          dance and travel. I am an environmental activist and social media
          zealot along the way. Working in the hospitality and coffee industries
          has given me great insight about human connection, customer needs and
          current trends on the market.
        </p>

        {/* <button id="portfolio-button" onClick={handleClick}>
          <h5 id="portfolio-button-text">VIEW PORTFOLIO</h5>
        </button> */}
      </div>
      <div className="aboutName">
        {aboutKrisi.map(({ name, picKrisi, linkedin, resume }, index) => (
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
        ))}
      </div>
    </>
  );
};

export default About;
