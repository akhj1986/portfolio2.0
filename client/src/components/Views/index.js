import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import styles from "./index.module.scss"

import Home from "./home"
import Experience from "./experience"
import Contact from "./contact/Contact"

const MainContent = () => {
  return (
    <div className={styles.container}>
      <Home />
      <Experience />
      <Contact />
    </div>
  )
}

export default MainContent
