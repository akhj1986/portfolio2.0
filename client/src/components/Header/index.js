import React from "react"
import Logo from "./Logo"
import NavBar from "../Nav/NavBar"
import styles from "./index.module.scss"

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <NavBar />
    </div>
  )
}

export default Header
