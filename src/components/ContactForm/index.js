import React, { useState } from "react";
import "./style.css";

function ContactForm() {
  // Setting the component's initial state
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });
  // Function to handle input change
  const handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value
    });
  };
  // Function to handle submitting the form
  const handleFormSubmit = event => {
    // Preventing the default behavior of the form submit
    event.preventDefault();
    if (!formData.firstName) {
      alert("Please provide your first name!");
    } else if (!formData.lastName) {
      alert("Please provide your last name!");
    } else if (!formData.email) {
      alert("Please provide your email address!");
    } else if (!formData.message) {
      alert("Would you like to send me a message?");
    } else {
      // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
      alert(`Dear ${formData.firstName} ${formData.lastName}, thank you for submitting the contact form!`);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section className="text-center">
      <h4 className="px-5 mb-3" style={{ lineHeight: "3rem", color: "rgb(9, 155, 180)" }}>
        Please complete and submit the form to contact me!
      </h4>
      <form className="customForm">
        <div className="mx-auto px-3 row">
          <div className="col-md-6 col-xl-3 mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="First name"
              value={formData.firstName}
              name="firstName"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 col-xl-3 mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Last name"
              value={formData.lastName}
              name="lastName"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-xl-6 mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Email address"
              value={formData.email}
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              type="text"
              placeholder="Your message"
              value={formData.message}
              name="message"
              onChange={handleInputChange}
            >
            </textarea>
          </div>
        </div>
        <button className="submitBtn btn btn-info" type="submit" onClick={handleFormSubmit}>Submit form</button>
      </form>
    </section>
  );
}

export default ContactForm;



