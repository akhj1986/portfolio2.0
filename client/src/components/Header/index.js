import React from "react";
import Logo from "./Logo";
import NavBar from "../Nav/NavBar";

const Header = () => {
  return (
    <div className="section head">
      <Logo />
      <NavBar />
    </div>
  );
};

export default Header;
