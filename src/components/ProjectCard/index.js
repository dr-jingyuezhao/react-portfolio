import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ProjectCard(props) {
  const image = require(`../../assets/images/${props.image}`);
  return (
    <div className="cardContainer col-sm-12 col-md-6 col-lg-4 mb-3">
      <div className="card">
        <img src={image} className="card-img-top" alt={props.title} />
        <div className="card-body text-center">
          <h5 className="card-title text-capitalize"><strong style={{ color: "rgb(9, 155, 180)", fontSize: "30px", lineHeight: "3rem" }}>Project title: </strong><br />{props.title}</h5>
          <p className="card-text">{props.description}.</p>
          <div className="d-flex flex-column align-items-center">
            <Link className="font-weight-bold" to={props.appLink} target="_blank" rel="noopener noreferrer" style={{ color: "rgb(9, 155, 180)", fontSize: "20px" }}>
              <strong>The App Link</strong>
            </Link>
            <a className="moreBtn btn btn-info" href={props.githubRepoLink} target="_blank" rel="noopener noreferrer" role="button">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
