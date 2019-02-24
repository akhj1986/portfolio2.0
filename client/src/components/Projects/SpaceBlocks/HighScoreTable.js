import React, { Component } from "react"
import TableEntry from "./TableEntry"
import { Link } from "react-router-dom"
import Conditional from "./Conditional"
import styles from "./highScoreTable.module.scss"

const axios = require("axios")

class HighScoreTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scores: [],
      isLoading: true,
      error: false
    }
    this.loaded = this.loaded.bind(this)
  }

  componentDidMount() {
    axios
      .get("https://spaceblocksattack.herokuapp.com/api/scores")
      .then(res => {
        this.setState({
          scores: res.data
        })
      })
      .then(() => {
        this.loaded()
      })
      .catch(err => {
        console.log("Error:", err)
        this.setState({
          error: true,
          isLoading: false
        })
      })
  }

  loaded() {
    this.setState({
      isLoading: false
    })
  }

  handleClick() {
    window.close()
  }

  render() {
    return (
      <div className={styles.scoreTable}>
        <h1>Space Blocks Attack!</h1>
        <h2>High Scores</h2>
        <ul>
          {this.state.scores
            .sort((a, b) => b.score - a.score)
            .slice(0, 10)
            .map((info, i) => {
              let classID = ""
              i % 2 === 0 ? (classID = "even") : (classID = "odd")
              return (
                <TableEntry
                  key={info._id}
                  elementClass={classID}
                  name={info.name}
                  score={info.score}
                  date={info.create_date}
                />
              )
            })}
        </ul>
        {this.state.error ? (
          <h1 className={styles.failed}>Failed to fetch scores from server!</h1>
        ) : null}
        <Conditional submitting={this.state.isLoading} />
        <br />
        <Link to="/spaceblocks">
          <button>Back to menu</button>
        </Link>
        <button onClick={this.handleClick}>Exit Game</button>
      </div>
    )
  }
}

export default HighScoreTable
