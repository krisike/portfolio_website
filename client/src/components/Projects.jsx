import React from 'react';
import { allProjects } from '../constants/constants.js';

const Projects = () => {
  return (
    <>
      <div className="projectContainer">
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
    </>
  );
};

export default Projects;
