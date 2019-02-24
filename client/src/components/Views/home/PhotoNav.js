import React from "react"
import styles from "./photoNav.module.scss"

import smallHeadShot from "../../../img/headshot3.jpg"

const PhotoNav = () => {
  return (
    <div className={styles.photoHomeNav}>
      <img src={smallHeadShot} alt="problem loading headshot" />
      <p>
        Alex Harris is a junior front-end developer transitioning from a career
        in teaching. <br />
      </p>
    </div>
  )
}

export default PhotoNav
