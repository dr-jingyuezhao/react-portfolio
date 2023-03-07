import React from "react";
import { Link } from 'react-router-dom';
import Jumbotron from '../Jumbotron';
import ContactInfo from '../ContactInfo';
import './style.css';

function Home() {
  const image = require(`../../assets/images/my-wd-img.jpg`);
  return (
    <div>
      <Jumbotron>
        <div className="col-lg-5 my-auto text-center">
          <div className="mx-auto">
            <h1 className="jumboText mb-5">Welcome to my portfolio site!</h1>
            <h2 className="jumboText mb-5">My name is Jingyue.</h2>
            <h3 className="jumboText mb-5">I'm a front-end web developer with a passion for creating excellent user experiences.</h3>
            <Link to="contact" role="button" className="btn btn-warning btn-xl rounded-pill js-scroll-trigger">
              Let's collaborate!
            </Link>
          </div>
        </div>
        <div className="col-lg-7 my-auto">
          <div className="pic-container">
            <img src={image} className="img-fluid" alt="working on projects at desk" />
          </div>
        </div>
      </Jumbotron >
      {/* Information about GitHub, LinkedIn, CV, Email, Phone number */}
      < ContactInfo />
    </div >
  );
}

export default Home;
