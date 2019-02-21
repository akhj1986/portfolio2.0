import React, { Component } from "react";
import styles from "./tableEntry.module.scss";
import cn from "classnames";

const moment = require("moment");

class TableEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(new Date(this.props.date)).format("ll")
    };
  }
  render() {
    return (
      <li
        className={cn(styles.tableEntry, {
          [styles[this.props.elementClass]]: this.props.elementClass
        })}
      >
        <span className={styles.playerName}>{this.props.name}</span>
        <span className={styles.playerScore}>{this.props.score}</span>
        <span className={styles.inputDate}>{this.state.date}</span>
      </li>
    );
  }
}

export default TableEntry;
