import React from "react"
import styles from "./index.module.scss"
import Contact from "./Contact"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Contact />
      <ul className={styles.footerList}>
        <li className={styles.footerItem}>&copy; Alex Harris-Jedamski 2019</li>
      </ul>
    </div>
  )
}

export default Footer
