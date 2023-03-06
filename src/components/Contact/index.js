import React from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from '../ContactInfo';
import './style.css';

function Contact() {
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
                <ContactInfo />

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
