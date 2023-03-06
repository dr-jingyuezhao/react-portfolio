import React, { useState } from "react";
import './style.css';

function ContactForm() {
  // Setting the component's initial state
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = event => {
    // Preventing the default behavior of the form submit
    event.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Fill out your first name, last name and email address, please!");
    } else {
      // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
      alert(`Hello ${formData.firstName} ${formData.lastName}`);
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
      <p>
        Please fill the form below to contact me!
      </p>
      <form className="text-center">
        <div className="form-row">
          <div className="col-sm-12 col-xl-6 mb-3">
            <input className="form-control" type="text" placeholder="First name"
              value={formData.firstName}
              name="firstName"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-12 col-xl-6 mb-3">
            <input className="form-control" type="text" placeholder="Last name"
              value={formData.lastName}
              name="lastName"
              onChange={handleInputChange}
            />
          </div>
          <div className="col mb-3">
            <input className="form-control" type="email" placeholder="Email address"
              value={formData.email}
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="col mb-3">
            <textarea className="form-control" type="text" placeholder="Your message"
              value={formData.message}
              name="message"
              onChange={handleInputChange}
            >
            </textarea>
          </div>
        </div>
        <button class="btn btn-info" type="submit" onClick={handleFormSubmit}>Submit form</button>
      </form>
    </section>
  );
}

export default ContactForm;



