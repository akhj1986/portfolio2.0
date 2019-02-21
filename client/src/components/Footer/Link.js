import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import styles from "./link.module.scss";

const FooterLink = () => {
  return (
    <MediaQuery maxWidth={489}>
      {matches => {
        if (matches) {
          return (
            <li className={styles.footerItem}>
              <Link className={styles.footerItem} to="/contact">
                Contact
              </Link>
            </li>
          );
        } else {
          return null;
        }
      }}
    </MediaQuery>
  );
};

export default FooterLink;
