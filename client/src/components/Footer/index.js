import React from "react";
import FooterLink from "./Link";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.footerList}>
        <li className={styles.footerItem}>&copy; Alex Harris 2018</li>
        <FooterLink />
      </ul>
    </div>
  );
};

export default Footer;
