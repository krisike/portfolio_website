import React from 'react';
import { allProjects } from '../constants/constants.js';

const Projects = () => {
  return (
    <>
      <div>
        {allProjects.map(
          (
            {
              projectName,
              Description,
              gitHubLink,
              gifLink,
              technologyUsed,
              websiteLink
            },
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
                <a
                  key={index}
                  className="project-link"
                  href={websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="animatedGif"
                    src={gifLink}
                    alt="project-link"
                  />
                </a>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default Projects;
