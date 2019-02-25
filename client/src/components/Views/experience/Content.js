import React, { Component } from "react"
import styles from "./content.module.scss"
import data from "./data.json"
import MediaQuery from "react-responsive"
import Photo from "../banner/Photo"
import Phrases from "../banner/Phrases"

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
        <MediaQuery maxWidth={489}>
          {matches => {
            if (matches) {
              return null
            } else {
              return <Phrases />
            }
          }}
        </MediaQuery>
        <div className={styles.summary}>
          <div>
            <p>{this.state.text.blurb}</p>
            {this.state.extensionText ? (
              <div className={styles.extensionDiv}>
                <p>{this.state.text.extensionOne}</p>
                <p>{this.state.text.extensionTwo}</p>
              </div>
            ) : null}
          </div>
          <MediaQuery maxWidth={489}>
            {matches => {
              if (matches) {
                return null
              } else {
                return <Photo />
              }
            }}
          </MediaQuery>
        </div>
        <p className={styles.workPrompt}>
          Please check out examples of my work below.
        </p>
        <button className={styles.readMore} onClick={this.handleClick}>
          {this.state.extensionText ? "Collapse" : "Read more about me!"}
        </button>
      </div>
    )
  }
}

export default Content
