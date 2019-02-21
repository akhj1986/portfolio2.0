import React from "react";
import { Link } from "react-router-dom";
import styles from "./CardDisplay.module.scss";
import CardDetails from "./display/CardDetails";

const ZoomPage = props => {
  return (
    <div className={styles.container}>
      <CardDetails id={props.match.params.card_id} />
      <Link to="/mtgsearch" className={styles.link}>
        Back to search
      </Link>
    </div>
  );
};

export default ZoomPage;
