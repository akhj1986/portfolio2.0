import React from "react"
import { Link } from "react-router-dom"
import styles from "./photoNav.module.scss"

import smallHeadShot from "../../../img/headshot3.jpg"

const PhotoNav = () => {
  return (
    <div className={styles.photoHomeNav}>
      <img src={smallHeadShot} alt="problem loading headshot" />
      <p>
        Alex Harris is a junior front-end developer transitioning from a career
        in teaching. <br />
        <Link className={styles.learnMore} to="/skills">
          Learn More
        </Link>
      </p>
    </div>
  )
}

export default PhotoNav
