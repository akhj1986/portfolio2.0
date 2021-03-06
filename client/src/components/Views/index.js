import React from "react"
import styles from "./index.module.scss"
import Banner from "./banner"
import Experience from "./experience"
import MediaQuery from "react-responsive"

const MainContent = () => {
  return (
    <div className={styles.container}>
      <MediaQuery maxWidth={489}>
        {matches => {
          if (matches) {
            return <Banner />
          } else {
            return null
          }
        }}
      </MediaQuery>
      <Experience />
    </div>
  )
}

export default MainContent
