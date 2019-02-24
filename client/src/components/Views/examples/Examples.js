import React from "react"
import Content from "./Content"
import styles from "./examples.module.scss"

const Examples = () => {
  return (
    <div id="examples">
      <div className={styles.container}>
        <div>
          <Content />
        </div>
      </div>
    </div>
  )
}

export default Examples
