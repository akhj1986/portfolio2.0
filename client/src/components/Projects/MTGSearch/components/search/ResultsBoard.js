import React from "react";
import { Link } from "react-router-dom";
import styles from "./ResultsBoard.module.scss";

const ResultsBoard = props => {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.imageHeader}>
        <Link to={`/mtgsearch/${props.srcData.id}`}>
          <h1>{props.srcData.name}</h1>
        </Link>
        <h2>{props.srcData.manaCost}</h2>
        <h4>{props.srcData.rarity}</h4>
      </div>
      <div className={styles.printings}>
        {props.srcData.printings.map(set => {
          return <p key={set}>{set}</p>;
        })}
      </div>
      <h3>{props.srcData.flavor}</h3>
      <p>{props.srcData.text}</p>
      <Link to={`/mtgsearch/${props.srcData.id}`} className={styles.imageLink}>
        <img
          src={props.srcData.imageUrl}
          alt={props.srcData.name}
          name={props.srcData.name}
        />
      </Link>
    </div>
  );
};

export default ResultsBoard;
