import React from "react";
import styles from "./SubTypes.module.scss";

const SubTypes = props => {
  return (
    <div className={styles.container}>
      <label className={styles.searchLabel}>
        Subtype{" "}
        <select name="subType" onChange={props.handleChange}>
          <option value="">Please select</option>
          {props.subTypeCard
            .sort((a, b) => {
              if (a < b) {
                return -1;
              }
              if (a > b) {
                return +1;
              } else {
                return 0;
              }
            })
            .map(subType => {
              return (
                <option value={subType} key={subType}>
                  {subType}
                </option>
              );
            })}
        </select>
      </label>
    </div>
  );
};

export default SubTypes;
