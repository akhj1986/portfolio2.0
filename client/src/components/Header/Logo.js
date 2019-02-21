import React from "react";
import logo from "../../img/logo2.png";
import KnownScripts from "./KnownScripts";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="title">
      <div className="logo-title">
        <Link to="/">
          <img src={logo} className="logo" alt="AH" />
        </Link>
        <div className="heading">
          <h2>Front-End Developer</h2>
          <KnownScripts />
        </div>
      </div>
    </div>
  );
};

export default Logo;
