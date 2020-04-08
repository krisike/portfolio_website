import React from 'react';
import { allProjects } from '../constants/constants.js';

const Projects = () => {
  return (
    <>
      <div className="projectContainer">
        {allProjects.map(
          (
            { projectName, Description, gitHubLink, gifLink, technologyUsed },
            index
          ) => {
            return (
              <>
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
              </>
            );
          }
        )}
      </div>
    </>
  );
};

export default Projects;
