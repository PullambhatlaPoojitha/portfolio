import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../components/ProjectList";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
        <h2></h2>
      <h1 className="head"> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;