import React from "react";
import styles from "./Types.module.scss";

const Types = props => {
  return (
    <div className={styles.container}>
      <label className={styles.searchLabel}>
        Type{" "}
        <select name="type" onChange={props.handleChange}>
          <option value="">Please select</option>
          {props.typeCard.map(type => {
            return (
              <option value={type.value} key={type.identity}>
                {type.identity}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default Types;
