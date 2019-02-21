import React from "react";
import Paragraph from "./Paragraph";
import styles from "./portfolio.module.scss";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className={styles.container}>
        <div className="portfolio-content">
          <Paragraph />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
