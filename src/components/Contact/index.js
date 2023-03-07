import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Jumbotron from '../Jumbotron';
import ContactInfo from '../ContactInfo';
import ContactForm from '../ContactForm';
import './style.css';

function Contact() {
  return (
    <div>
      <Jumbotron>
        <div className="col my-auto text-center">
          <div className="mx-auto">
            <h1 className="jumboText mb-5">Get in Touch!</h1>
            <h3 className="jumboText mb-3" style={{ lineHeight: "4rem" }}>I'm available for freelance work. <br />I'd like to hear from you.</h3>
            <Link to="ContactForm" role="button" className="btn btn-warning btn-xl rounded-pill js-scroll-trigger">
              Click to fill in the contact form below!
            </Link>
            {/* Information about GitHub, LinkedIn, CV, Email, Phone number */}
            <ContactInfo />
          </div>
        </div>
      </Jumbotron>
      {/* The contact form for handling events is displayed when clicking the "Click to fill in the contact form" button */}
      <Routes>
        <Route path="ContactForm" element={<ContactForm />} />
      </Routes>
    </div >
  );
}

export default Contact;
