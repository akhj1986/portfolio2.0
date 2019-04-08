import React from "react"
import styles from "./index.module.scss"

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.content}>
        This MTG Search Engine is unofficial Fan Content permitted under the Fan
        Content Policy. Not approved/endorsed by Wizards. Portions of the
        materials used are property of Wizards of the Coast. ©Wizards of the
        Coast LLC.
      </p>
    </div>
  )
}

export default Footer
