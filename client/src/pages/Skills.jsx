import React from 'react';
require('../styling/Skills.css');

const Skills = () => {
  return (
    <div className="skillsContainer">
      {/* <h4>
        The 15+ years of hospitality and international coffee business
        experience has only led me to be hungry for more knowlegdge. Co-creating
        an enterpreneurship business and working in many parts of has been vital
        for understanding user and product to a different level. Social Media,
        Content Creating Photography and client relationships has been big part
        of the journey. Below are parts of the new wave of development.{' '}
      </h4> */}
      <div className="card">
        <h1 className="titleInfo">Front-End</h1>
        <p className="skillsDescription">
          I am very keen on artfullness, finding hidden patterns, making
          connections between seemingly unrelated phenomena, and generating
          solutions.
        </p>
        <ul className="skillsList">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Material UI</li>
          <li>Bootstrap4</li>
          <li>React Spring</li>
        </ul>
        {/* <p>
          <button>See Github</button>{' '}
        </p> */}
      </div>
      <div className="card">
        <h1 className="titleInfo">General</h1>
        <p className="skillsDescription">
          The learning takes new realms. A blend of creativity and logic.
          Intuition, empathy and human connection. Content development, product
          evolution, sustainable touch. Passion for UX/UI.
        </p>
        <ul className="skillsList">
          <li>Agile Methodology</li>
          <li>Git/Github</li>
          <li>Heroku Deployment</li>
          <li>Microsoft Office</li>
          <li>Figma</li>
          <li>Canva</li>
          <li>Webflow</li>
          <li>Adobe XD</li>
        </ul>
      </div>
      <div className="card">
        <h1 className="titleInfo">Back-End</h1>
        <p className="skillsDescription">
          The unicorn in me strives to process and find reasoning, relationship
          between facts, logical thinking call for structure, coming to a
          conclusion.
        </p>
        <ul className="skillsList">
          <li>Ruby</li>
          <li>Ruby on Rails</li>
          <li>PostgreSQL</li>
          <li>Express</li>
          <li>Node</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
