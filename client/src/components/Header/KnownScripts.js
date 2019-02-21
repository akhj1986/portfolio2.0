import React, { Component } from "react";
import data from "./data.json";

class KnownScripts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      codeLang: data.codeLang,
      displayClass: data.codeLang[0]
    };
    // this.changeLang = this.changeLang.bind(this);
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

  // changeLang() {
  //   const l = this.state.codeLang;
  //   let i = this.state.index;
  //   if (i < l.length - 1) {
  //     i++;
  //   } else {
  //     i = 0;
  //   }
  //   const selectL = l[i];
  //   this.setState({
  //     index: i,
  //     displayClass: selectL
  //   });
  // }

  // componentDidMount() {
  //   setInterval(this.changeLang, 4000);
  // }

  render() {
    return (
      <div className="nav-bar-icons">
        <span>Built with</span>
        <i
          id="code-lang-skills"
          className={this.state.displayClass}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default KnownScripts;
