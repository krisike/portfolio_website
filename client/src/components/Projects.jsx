import React from 'react';
import { allProjects } from '../constants/constants.js';

const Projects = () => {
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
        {allProjects.map(
          ({ projectName, Description, gitHubLink, gifLink }, index) => {
            return (
              <>
                <a
                  key={index}
                  className="project-link"
                  href={gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>{projectName}</p>
                </a>
                <p>{Description}</p>
                <p>{gitHubLink}</p>
                <img src={gifLink} alt="project-link" />
              </>
            );
          }
        )}
      </div>
      <div className="hr">
        <hr />
      </div>
    </>
  );
};

export default Projects;
