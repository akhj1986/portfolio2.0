import React from "react"
import { Link } from "react-router-dom"
import styles from "./learnMore.module.scss"

const LearnMore = () => {
  return (
    <Link className={styles.learnMore} to="/skills">
      Learn More
    </Link>
  )
}

export default LearnMore
