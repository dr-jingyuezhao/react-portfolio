import React from "react";
import "./style.css";

function ContactInfo() {
  const myCV = require("../../assets/documents/JZhao_CV_Mar2023.pdf");
  // Information about GitHub, LinkedIn, CV, Email, Phone number
  return (
    <section>
      <div className="customContainer container-fluid">
        <div className="infoBtns d-flex flex-wrap justify-content-center justify-content-xl-around">
          {/* Add a link to open a new tab by using the reference https://reactgo.com/react-open-link-new-tab/ */}
          <a className="btn btn-info rounded-pill" href="https://github.com/dr-jingyuezhao" target="_blank" rel="noopener noreferrer" role="button">My GitHub</a>
          <a className="btn btn-info rounded-pill" href="https://www.linkedin.com/in/jingyue-zhao-ph-d-78770232/" target="_blank" rel="noopener noreferrer" role="button">My LinkedIn</a>
          {/* Add a link to my CV by using the reference https://stackoverflow.com/questions/51937086/how-do-i-link-to-local-pdf-file-in-a-create-react-app-project */}
          <a className="btn btn-info rounded-pill" href={myCV} target="_blank" rel="noopener noreferrer" role="button">My CV</a>
          {/* Add a Mailto link by using the reference https://www.w3docs.com/snippets/html/how-to-create-mailto-links.html */}
          <a className="btn btn-info rounded-pill" href="mailto:jingyue@site.com" role="button">Email Me</a>
          {/* Add a clickable phone number link by using the reference https://blog.hubspot.com/website/html-telephone-link */}
          <a className="btn btn-info rounded-pill" href="tel:+44(0)123-456-7890" role="button">Call Me</a>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
