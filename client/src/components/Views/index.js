import React from "react"
import styles from "./index.module.scss"
import Banner from "./banner"
import Experience from "./experience"
import Contact from "./contact/Contact"
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
      <Contact />
    </div>
  )
}

export default MainContent
