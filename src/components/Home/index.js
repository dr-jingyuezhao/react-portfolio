import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

function Home() {
  const image = require(`../../assets/images/my-wd-img.jpg`);
  const myCV = require(`../../assets/documents/JZhao_CV_Mar2023.pdf`);
  return (
    <div>
      <div className="jumbotron">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-5 my-auto text-center">
              <div className="mx-auto">
                <h1 className="jumboText mb-5">Welcome to my site!</h1>
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
          </div>
        </div>
      </div>
      {/* Information about GitHub, LinkedIn, CV, Email, Phone number */}
      <div className="customContainer container-fluid">
        <div className="infoBtns d-flex flex-wrap justify-content-center justify-content-xl-around">
          <a className="btn btn-info rounded-pill" href="https://github.com/dr-jingyuezhao" target="_blank" rel="noopener noreferrer" role="button">My GitHub</a>
          <a className="btn btn-info rounded-pill" href="https://www.linkedin.com/in/jingyue-zhao-ph-d-78770232/" target="_blank" rel="noopener noreferrer" role="button">My LinkedIn</a>
          <a className="btn btn-info rounded-pill" href={myCV} target="_blank" rel="noopener noreferrer" role="button">My CV</a>
          <a className="btn btn-info rounded-pill" href="mailto:jingyue@site.com" role="button">Email Me</a>
          <a className="btn btn-info rounded-pill" href="tel:123-456-7890" role="button">Call Me</a>
        </div>
      </div>
    </div >
  );
}

export default Home;
