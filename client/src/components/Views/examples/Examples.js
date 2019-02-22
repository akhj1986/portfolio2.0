import React from "react";
import Paragraph from "./Paragraph";
import styles from "./examples.module.scss";

const Portfolio = () => {
  return (
    <div id="examples">
      <div className={styles.container}>
        <div>
          <Paragraph />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
