import React from "react";
import ContactList from "./ContactList";
import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.paragraphHeadContact}>
          <h1>Contact Me</h1>
        </div>
        <ContactList />
      </div>
    </div>
  );
};

export default Contact;
