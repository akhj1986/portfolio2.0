import React from "react"
import styles from "./codeExample.module.scss"
import cn from "classnames"

import Highlight from "react-highlight"

const CodeExample = props => {
  console.log(props.style)
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <button
          className={styles.close}
          onClick={props.handleClick}
          name="codeExit"
        >
          &#10006;
        </button>
        <Highlight className={cn(props.style, styles.snippet)}>
          {props.codeText}
        </Highlight>
      </div>
    </div>
  )
}

export default CodeExample
