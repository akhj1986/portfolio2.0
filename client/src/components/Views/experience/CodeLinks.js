import React, { Component } from "react"
import { snippets } from "./data.js"
import CodeExample from "./CodeExample"
import styles from "./codeLinks.module.scss"

class CodeLinks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exampleCode: false,
      codeText: "",
      snippets: snippets
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const { name, value, language } = e.target
    this.setState(prevState => {
      if (name === "codeExit") {
        return {
          exampleCode: !prevState.exampleCode,
          spaceblocks: false,
          mtgsearch: false
        }
      } else {
        return {
          codeText: value,
          codeLanguage: language,
          exampleCode: !prevState.exampleCode
        }
      }
    })
  }
  render() {
    return (
      <div className={styles.container} id="code">
        <h1 className={styles.header}>Coding-example snippets</h1>
        <div className={styles.linksContainer}>
          {this.state.exampleCode && (
            <CodeExample
              handleClick={this.handleClick}
              codeText={this.state.codeText}
              style={this.state.codeLanguage}
            />
          )}
          {this.state.snippets.map(snip => {
            return (
              <button
                name={snip.name}
                value={snip.codeText}
                key={snip.name}
                onClick={this.handleClick}
                className={styles.codeButton}
              >
                {snip.heading}
              </button>
            )
          })}
        </div>
      </div>
    )
  }
}

export default CodeLinks
