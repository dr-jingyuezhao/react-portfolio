import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

function Contact() {
  const myCV = require(`../../assets/documents/JZhao_CV_Mar2023.pdf`);
  return (
    <div>
      <div className="jumbotron">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col my-auto text-center">
              <div className="mx-auto">
                <h1 className="jumboText mb-5">Get in Touch!</h1>
                <h3 className="jumboText mb-5">I'm available for freelance work.</h3>
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

                {/* Must have a contact form for handling events */}
                <Link to="contact" role="button" className="btn btn-warning btn-xl rounded-pill js-scroll-trigger">
                  Let's collaborate!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Contact;
