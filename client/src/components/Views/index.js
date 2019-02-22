import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./index.module.scss";

import Home from "./home/home";
import Examples from "./examples/Examples";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";

const MainContent = () => {
  return (
    <div className={styles.container}>
      <Route exact path="/" component={Home} />
      <Route path="/examples" component={Examples} />
      <Route path="/skills" component={Skills} />
      <Route path="/contact" component={Contact} />
    </div>
  );
};

export default MainContent;
