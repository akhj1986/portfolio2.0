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
      <div className={styles.examplesLinks}>
        <h1 className={styles.header}>Projects</h1>
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
          )
        })}
        {/* <div className={styles.repositoryLink}>
          <a
            href="https://github.com/akhj1986?tab=repositories"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-git" />
          </a>{" "}
          <p>My repositories!</p>
        </div> */}
      </div>
    )
  }
}

export default ExamplesLinks
