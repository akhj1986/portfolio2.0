import React from "react";
import logo from "../../img/logo2.png";
import KnownScripts from "./KnownScripts";
import { Link } from "react-router-dom";
import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.title}>
      <div className={styles.logoTitle}>
        <Link to="/">
          <img src={logo} className={styles.logo} alt="AH" />
        </Link>
        <div className={styles.heading}>
          <h2>Front-End Developer</h2>
          <KnownScripts />
        </div>
      </div>
    </div>
  );
};

export default Logo;
