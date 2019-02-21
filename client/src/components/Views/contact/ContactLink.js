import React from "react";
import cn from "classnames";
import styles from "./contactLink.module.scss";

const ContactLink = props => {
  return (
    <span className={styles.contactLink}>
      <a
        className={cn({ [styles[props.aClass]]: props.aClass })}
        href={props.href}
        target={props.target}
      >
        <i className={props.iClass} /> {props.text}
      </a>
    </span>
  );
};

export default ContactLink;
