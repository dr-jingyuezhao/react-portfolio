import React from "react";
import ProjectCard from "../ProjectCard";
import Jumbotron from '../Jumbotron';
import projects from "../../projects.json";
import './style.css';

function Projects(props) {
  return (
    <Jumbotron>
      <h1 className="jumboText mb-5">Projects List</h1>
      {/* Section of project work */}
      <section id="work" className="page-section text-center">
        <div className="container-fluid">
          <div className="row projects">
            {/* Project card: Project title, Link to the deployed version, Link to the GitHub repository, GIF or screenshot of the deployed application */}
            {projects.map(project => <ProjectCard title={project.title} description={project.description} appLink={project.appLink} githubRepoLink={project.githubRepoLink} image={project.image} />)}
          </div>
        </div>
      </section>
    </Jumbotron>
  );
}

export default Projects;
