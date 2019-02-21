import React, { Component } from "react";
import data from "./textArray.json";
import styles from "./phrases.module.scss";
import cn from "classnames";

class Phrases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textArray: data.texts,
      displayText: "Web development using the latest technologies...",
      index: 0,
      displayClass: "small-text",
      interval: ""
    };
    this.textRotation = this.textRotation.bind(this);
  }

  componentDidMount() {
    this.setState({ interval: setInterval(this.textRotation, 3200) });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  textRotation() {
    let i = this.state.index;
    const t = this.state.textArray;
    if (i < t.length - 1) {
      i++;
    } else {
      i = 0;
    }
    const display = t[i];
    this.setState({
      index: i,
      displayClass: display.className,
      displayText: display.text
    });
  }

  render() {
    return (
      <div className={styles.phrases}>
        <h1
          className={cn({
            [styles[this.state.displayClass]]: this.state.displayClass
          })}
        >{`${this.state.displayText}`}</h1>
      </div>
    );
  }
}

export default Phrases;
