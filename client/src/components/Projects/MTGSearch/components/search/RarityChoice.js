import React from "react";
import styles from "./RarityChoice.module.scss";

const RarityChoice = props => {
  return (
    <div className={styles.container}>
      {props.rarityCard.map(c => {
        return (
          <label key={c.identity} className={styles.rarityCheck}>
            <input
              type="checkbox"
              name="rarity"
              value={c.value}
              checked={c.checked}
              onChange={props.handleChange}
              className={c.value}
            />
            {c.identity}
          </label>
        );
      })}
    </div>
  );
};

export default RarityChoice;
