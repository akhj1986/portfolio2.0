import React from "react";
import cn from "classnames";
import styles from "./ColorChoice.module.scss";

const ColorChoice = props => {
  return (
    <div className={styles.container}>
      {props.colorsCard.map(c => {
        return (
          <label
            key={c.identity}
            className={cn(styles.colorCheck, { [styles[c.value]]: c.value })}
          >
            <input
              type="checkbox"
              name="colors"
              value={c.value}
              checked={c.checked}
              onChange={props.handleChange}
              className={c.value}
            />
            {c.identity}
          </label>
        );
      })}
      <label className={styles.colorlessRadio}>
        <input
          type="radio"
          name="colorless"
          value="Colorless"
          checked={props.colorless}
          onChange={props.radioChange}
        />
        Colorless
      </label>
    </div>
  );
};

export default ColorChoice;
