import React, { Component } from "react"
import ExamplesLinks from "./ExamplesLinks"
import styles from "./content.module.scss"
import data from "./data.json"
import CodeLinks from "./CodeLinks"

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      extensionText: false,
      text: data.text
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        extensionText: !prevState.extensionText
      }
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Examples / About</h1>
        <p>{this.state.text.blurb}</p>
        {this.state.extensionText ? (
          <div>
            <p>{this.state.text.extensionOne}</p>
            <p>{this.state.text.extensionTwo}</p>
          </div>
        ) : null}
        <p className={styles.workPrompt}>
          Please check out examples of my work below.
        </p>
        <button className={styles.readMore} onClick={this.handleClick}>
          {this.state.extensionText ? "Collapse" : "Read more about me!"}
        </button>
        <ExamplesLinks />
        <CodeLinks />
      </div>
    )
  }
}

export default Content
