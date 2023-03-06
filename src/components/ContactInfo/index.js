import React from 'react';
import './style.css';

function ContactInfo() {
  const myCV = require(`../../assets/documents/JZhao_CV_Mar2023.pdf`);
  return (
    <section>
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
    </section>
  );
}

export default ContactInfo;
