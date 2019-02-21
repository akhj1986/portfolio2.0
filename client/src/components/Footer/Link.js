import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

const FooterLink = () => {
  return (
    <MediaQuery maxWidth={489}>
      {matches => {
        if (matches) {
          return (
            <li className="footer-item">
              <Link className="footer-item" to="/contact">
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
