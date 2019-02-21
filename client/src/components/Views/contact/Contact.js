import React from "react";
import ContactList from "./ContactList";

const Contact = () => {
  return (
    <div id="contact-page">
      <div className="container">
        <div className="paragraph-head-contact">
          <h1>Contact Me</h1>
        </div>
        <ContactList />
      </div>
    </div>
  );
};

export default Contact;
