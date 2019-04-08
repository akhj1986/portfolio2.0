import React from "react"
import smallHeadShot from "../../../img/headshot3.jpg"
import styles from "./photo.module.scss"

const Photo = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.headShot}
        src={smallHeadShot}
        alt="problem loading: headshot"
      />
    </div>
  )
}

export default Photo
