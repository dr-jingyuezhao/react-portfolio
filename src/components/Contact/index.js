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
            <h1 className="jumboText mb-4">Get in Touch!</h1>
            <h3 className="jumboText mb-4" style={{ lineHeight: "4rem" }}>I'm available for freelance work.<br />Here's how you can find more about me and reach me.</h3>
            {/* Information about GitHub, LinkedIn, CV, Email, Phone number */}
            <ContactInfo />
            <h4 className="jumboText my-4" style={{ lineHeight: "4rem" }}>I'd love to hear from you. You can send me a message by clicking the button below.</h4>
            {/* Add a button for the link to ContactForm */}
            <Link to="ContactForm" role="button" className="btn btn-warning btn-xl rounded-pill js-scroll-trigger mb-3">
              Click to fill in the contact form now!
            </Link>
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
