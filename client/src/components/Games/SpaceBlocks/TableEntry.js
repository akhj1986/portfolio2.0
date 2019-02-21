import React, { Component } from "react";
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
      <li className={this.props.elementClass}>
        <span className="player-name">{this.props.name}</span>
        <span className="player-score">{this.props.score}</span>
        <span className="input-date">{this.state.date}</span>
      </li>
    );
  }
}

export default TableEntry;
