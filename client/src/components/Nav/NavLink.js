import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./navLink.module.scss"
import cn from "classnames"

const NavLinks = props => {
  return (
    <li>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          borderBottom: "solid 4px #6e06d6"
        }}
        className={cn(styles.navItem, { [styles[props.id]]: props.id })}
        id={props.id}
        exact={props.exact}
        to={props.path}
        onClick={() => props.handleClick(props.name)}
      >
        {props.text}
      </NavLink>
    </li>
  )
}

export default NavLinks
