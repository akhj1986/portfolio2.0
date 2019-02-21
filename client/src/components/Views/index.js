import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./home/home";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";

const MainContent = () => {
  return (
    <div className="section body-content">
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/skills" component={Skills} />
      <Route path="/contact" component={Contact} />
    </div>
  );
};

export default MainContent;
