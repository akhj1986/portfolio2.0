import React from "react"
import logo from "../../img/logo2.png"
import KnownScripts from "./KnownScripts"
import styles from "./logo.module.scss"

const Logo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoTitle}>
        <KnownScripts />
        <div className={styles.logoContainer}>
          <img src={logo} className={styles.logo} alt="AH" />
        </div>
        <h2 className={styles.heading}>Alex Harris-Jedamski</h2>
        <p className={styles.developerText}>
          Front-end developer based in London.
        </p>
      </div>
    </div>
  )
}

export default Logo
