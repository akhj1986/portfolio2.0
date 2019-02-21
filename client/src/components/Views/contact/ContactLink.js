import React from "react";

const ContactLink = props => {
  return (
    <span className={props.type}>
      <a className={props.aClass} href={props.href} target={props.target}>
        <i className={props.iClass} /> {props.text}
      </a>
    </span>
  );
};

export default ContactLink;
