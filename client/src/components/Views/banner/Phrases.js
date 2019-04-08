import React, { Component } from "react"
import data from "./textArray.json"
import styles from "./phrases.module.scss"
import cn from "classnames"

class Phrases extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textArray: data.texts,
      displayText: "",
      index: -1,
      displayClass: "mediumText",
      interval: "",
      fadeIn: false
    }
    this.textRotation = this.textRotation.bind(this)
  }

  componentDidMount() {
    this.setState({ interval: setInterval(this.textRotation, 2100) })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  textRotation() {
    let i = this.state.index
    this.state.fadeIn
      ? (document.getElementById("phrasesBox").style.opacity = 0.05)
      : (document.getElementById("phrasesBox").style.opacity = 1)
    const t = this.state.textArray
    if (i < t.length - 1) {
      i++
    } else {
      i = 0
    }
    const display = t[i]
    this.setState(prevState => {
      return {
        index: i,
        displayClass: display.className,
        displayText: display.text,
        fadeIn: !prevState.fadeIn
      }
    })
  }

  render() {
    return (
      <div id="phrasesBox" className={styles.container}>
        <h1
          className={cn({
            [styles[this.state.displayClass]]: this.state.displayClass
          })}
        >{`${this.state.displayText}`}</h1>
      </div>
    )
  }
}

export default Phrases
