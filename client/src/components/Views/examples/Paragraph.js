import React from "react";
import ExamplesLinks from "./ExamplesLinks";
import styles from "./paragraph.module.scss";

const Paragraph = () => {
  return (
    <div className={styles.container}>
      <h1>Examples</h1>
      <p className={styles.paragraph}>
        As a new developer who just stepped into the world of programming in
        October 2018, a portfolio is very much still in the works.
      </p>
      <p className={styles.paragraph}>
        But please check out my Git repositories and play a fun little space
        game I built (not touch screen compatible, sorry)!
      </p>
      <ExamplesLinks />
    </div>
  );
};

export default Paragraph;
