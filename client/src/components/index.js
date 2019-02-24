import React from "react"
import styles from "./index.module.scss"

import Header from "./Header/"
import MainContent from "./Views/"
import Footer from "./Footer/"

const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default Wrapper
