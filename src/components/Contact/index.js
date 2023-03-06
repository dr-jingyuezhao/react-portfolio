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
        <h1 className="jumboText mb-5">Get in Touch!</h1>
        <h3 className="jumboText mb-5">I'm available for freelance work.</h3>
        {/* Information about GitHub, LinkedIn, CV, Email, Phone number */}
        <ContactInfo />
        <Link to="ContactForm" role="button" className="btn btn-warning btn-xl rounded-pill js-scroll-trigger">
          Let's collaborate!
        </Link>
      </Jumbotron>
      {/* The contact form for handling events is displayed when clicking the "Let's Collaborate" button */}
      <Routes>
        <Route path="ContactForm" element={<ContactForm />} />
      </Routes>
    </div >
  );
}

export default Contact;
