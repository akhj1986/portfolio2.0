import React from "react"
import { Route } from "react-router-dom"
import styles from "./index.module.scss"

import SpaceBlocks from "./SpaceBlocks"
import HighScoreTable from "./HighScoreTable"
import PlayerInput from "./PlayerInput"
import GameMenu from "./GameMenu"
import Controls from "./Controls"

const Game = () => {
  return (
    <div className={styles.container}>
      <Route exact path="/spaceblocks" component={GameMenu} />
      <Route path="/spaceblocks/play" component={SpaceBlocks} />
      <Route path="/spaceblocks/scores" component={HighScoreTable} />
      <Route path="/spaceblocks/input" component={PlayerInput} />
      <Route path="/spaceblocks/controls" component={Controls} />
    </div>
  )
}

export default Game
