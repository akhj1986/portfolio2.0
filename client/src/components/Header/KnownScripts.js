import React, { Component } from "react";
import data from "./data.json";
import cn from "classnames";
import styles from "./knownScripts.module.scss";

class KnownScripts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      codeLang: data.codeLang,
      displayClass: data.codeLang[0]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const l = this.state.codeLang;
    let i = this.state.index;
    if (i < l.length - 1) {
      i++;
    } else {
      i = 0;
    }
    const selectL = l[i];
    this.setState({
      index: i,
      displayClass: selectL
    });
  }

  render() {
    return (
      <div className={styles.navBarIcons}>
        <span>Built with</span>
        <i
          id="code-lang-skills"
          className={cn(styles.codeLangSkills, {
            [this.state.displayClass]: this.state.displayClass
          })}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default KnownScripts;
