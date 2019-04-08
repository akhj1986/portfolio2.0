import React from "react"
import MediaQuery from "react-responsive"
import styles from "./index.module.scss"
import Photo from "./Photo"
import Phrases from "./Phrases"

const Home = () => {
  return (
    <div className={styles.container}>
      <MediaQuery maxWidth={899}>
        {matches => {
          if (matches) {
            return <Photo />
          } else {
            return null
          }
        }}
      </MediaQuery>
      <Phrases />
    </div>
  )
}

export default Home
