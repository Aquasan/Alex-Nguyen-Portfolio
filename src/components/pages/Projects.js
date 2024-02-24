import React from 'react';
import '../../App.css';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';

function Projects() {
  const backgroundColor = '#f0f0f0'; // Setting your desired background color
  const imageBorderStyle = '4px solid #333'; 

  return (
    <div style={{ backgroundColor }}>
      <h2 className="projects-header">Projects</h2>
      <div className="project-container">
        <div className="project-box">
          <img
            src={image1}
            alt="Project 1"
            className="project-image"
            style={{ border: imageBorderStyle }}
          />
          <p>1st Project </p>
        </div>
        <div className="project-box">
          <img
            src={image2}
            alt="Project 2"
            className="project-image"
            style={{ border: imageBorderStyle }}
          />
          <p>2nd Project</p>
        </div>
        <div className="project-box">
          <img
            src={image3}
            alt="Project 3"
            className="project-image"
            style={{ border: imageBorderStyle }}
          />
          <p>3rd Project</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
