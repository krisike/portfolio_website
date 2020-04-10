import React from 'react';
import { allProjects } from '../constants/constants.js';

const Projects = () => {
  return (
    <>
      <div>
        {allProjects.map(
          (
            { projectName, Description, gitHubLink, gifLink, technologyUsed },
            index
          ) => {
            return (
              <div className="projectContainer">
                <a
                  key={index}
                  className="project-link"
                  href={gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="projectName">{projectName}</p>
                </a>
                <p className="projectDescription">{Description}</p>
                <p>{technologyUsed}</p>

                <img className="animatedGif" src={gifLink} alt="project-link" />
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default Projects;
