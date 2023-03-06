import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

function ProjectCard(props) {
  const image = require(`../../assets/images/${props.image}`)
  return (
    <div className="cardContainer col-sm-12 col-md-6 col-lg-4 mb-3">
      <div className="card">
        <img src={image} className="card-img-top" alt={props.title} />
        <div className="card-body text-center">
          <h5 className="card-title text-capitalize"><strong style={{ color: "rgb(9, 155, 180)", fontSize: "30px", lineHeight: "3rem" }}>Project title: </strong><br />{props.title}</h5>
          <p className="card-text">{props.description}.</p>
          <ul className="cardInfo" style={{color: "rgb(9, 155, 180)"}}>
            <li>
              <Link className="cardInfo font-weight-bold" to={props.appLink} style={{ color: "rgb(9, 155, 180)", fontSize: "20px" }}>
                <strong>The App Link</strong>
              </Link>
            </li>
            <li>
              <Link className="cardInfo font-weight-bold" to={props.githubRepoLink} style={{ color: "rgb(9, 155, 180)", fontSize: "20px" }}>
                <strong>GitHub Repo Link</strong>
              </Link>
            </li>
          </ul>
          <a className="moreBtn btn btn-info" href="https://github.com/dr-jingyuezhao" target="_blank" rel="noopener noreferrer" role="button">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
