import React, { Component } from "react"
import { Link } from "react-router-dom"
import styles from "./examplesLinks.module.scss"
import CodeExample from "./CodeExample"
import { examples } from "./data"

class ExamplesLinks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exampleCode: false,
      codeText: "",
      codeExamples: examples
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
      <div id="projects" className={styles.projectsID}>
        <div className={styles.container}>
          <h1 className={styles.header}>Projects</h1>
          <div className={styles.innerContainer}>
            {this.state.exampleCode && (
              <CodeExample
                handleClick={this.handleClick}
                codeText={this.state.codeText}
                style={this.state.codeLanguage}
              />
            )}
            {this.state.codeExamples.map(link => {
              return (
                <div
                  className={styles.projectLink}
                  key={link.name}
                  language={link.language}
                >
                  <Link to={`/${link.name}`} target="_blank">
                    <img src={`./img/${link.src}`} alt={link.text} />
                  </Link>
                  <div className={styles.textBox}>
                    <h1 className={styles.linkHeader}>{link.heading}</h1>
                    <p>{link.text}</p>
                    <button
                      className={styles.codeButton}
                      onClick={this.handleClick}
                      name={link.name}
                      value={link.codeText}
                    >
                      Example code
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default ExamplesLinks
