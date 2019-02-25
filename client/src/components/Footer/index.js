import React from "react"
import styles from "./index.module.scss"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.footerList}>
        <li className={styles.footerItem}>&copy; Alex Harris 2018</li>
      </ul>
    </div>
  )
}

export default Footer
