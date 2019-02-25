import React, { Component } from "react"
import ContactLink from "./ContactLink"
import data from "./data.json"
import pdf from "./CVaHarrisJan2019.pdf"
import styles from "./contactList.module.scss"

class ContactList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: data.contactDetails
    }
  }

  render() {
    const contactComponents = this.state.contacts.map(contact => (
      <ContactLink
        key={contact.id}
        type={contact.type}
        aClass={contact.aClass}
        iClass={contact.iClass}
        href={contact.href === "pdf" ? pdf : contact.href}
        target={contact.target}
        text={contact.text}
      />
    ))
    return (
      <div className={styles.container} id="contact">
        {contactComponents}{" "}
      </div>
    )
  }
}

export default ContactList
