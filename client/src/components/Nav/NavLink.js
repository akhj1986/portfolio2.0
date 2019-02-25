import React from "react"
import styles from "./navLink.module.scss"
import cn from "classnames"

const NavLinks = props => {
  const handleClick = e => {
    const { name } = e.target
    const nameY = document.getElementById([name]).getBoundingClientRect()
    const Y = nameY.y
    console.log("Clicked", Y)
    window.scrollTo({
      top: Y,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <li>
      <button
        onClick={handleClick}
        name={props.name}
        className={cn(styles.navItem, { [styles[props.name]]: props.name })}
      >
        {props.text}
      </button>
    </li>
  )
}

export default NavLinks
