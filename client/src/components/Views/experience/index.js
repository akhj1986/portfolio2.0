import React from "react"
import Content from "./Content"
import styles from "./index.module.scss"
import ExamplesLinks from "./ExamplesLinks"
import CodeLinks from "./CodeLinks"

const Examples = () => {
  return (
    <div id="examples">
      <div className={styles.container}>
        <div>
          <Content />
          <ExamplesLinks />
          <CodeLinks />
        </div>
      </div>
    </div>
  )
}

export default Examples
