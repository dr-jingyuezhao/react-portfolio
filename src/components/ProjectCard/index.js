import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="cardContainer col-sm-12 col-md-6 col-lg-4 mb-3">
      <div className="card">
        <img src={props.image} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title"><strong>Project title:</strong> {props.title}</h5>
          <p className="card-text">{props.description}.</p>
          <ul className="cardInfo">
            <li>
              <Link className="cardInfo" to={props.appLink} style={{ color: "rgb(9, 155, 180)", fontStyle: "bold", fontSize: "20px" }}>
              <strong>App Link</strong>
              </Link>
            </li>
            <li>
            <Link className="cardInfo" to={props.githubRepoLink} style={{ color: "rgb(9, 155, 180)", fontStyle: "bold", fontSize: "20px" }}>
              <strong>GitHub Repo Link</strong>
              </Link>
            </li>
          </ul>
          <a href="https://github.com/dr-jingyuezhao" className="btn btn-primary">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
