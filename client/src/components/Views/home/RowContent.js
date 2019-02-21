import React from "react";
import largeHeadShot from "../../img/cropped-headshot2.jpg";
import styles from "./rowContent.module.scss";

const RowContent = () => {
  return (
    <div className={styles.rowContent}>
      <h1>About</h1>
      <div className={styles.headShot}>
        <img src={largeHeadShot} alt="problem loading: headshot" />
      </div>
    </div>
  );
};

export default RowContent;
