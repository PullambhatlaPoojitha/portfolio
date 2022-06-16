import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../components/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      {/* <GitHubIcon /> */}
      <div className="icon">
      <a href={project.link}><i class="github icon"></i></a>
      </div>
    </div>
  );
}

export default ProjectDisplay;