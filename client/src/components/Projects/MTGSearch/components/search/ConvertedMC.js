import React from "react";
import styles from "./ConvertedMC.module.scss";

const ConvertedMC = props => {
  return (
    <div className={styles.container}>
      CMC{" "}
      <label onChange={props.handleChange}>
        <select name="cmc">
          {["", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            cmc => {
              return (
                <option value={cmc} key={cmc}>
                  {cmc}
                </option>
              );
            }
          )}
        </select>
      </label>
    </div>
  );
};

export default ConvertedMC;
