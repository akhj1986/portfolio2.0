import React, { Component } from "react"
import NavLink from "./NavLink"
import data from "../Header/data.json"
import styles from "./navBar.module.scss"

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: data.routes
    }
  }

  render() {
    const routes = this.state.routes.map(route => (
      <NavLink
        key={route.routeName}
        name={route.routeName}
        path={route.path}
        exact={route.exact}
        text={route.text}
        id={route.routeName}
      />
    ))

    return (
      <div className={styles.navBar}>
        <ul id="navigation" className={styles.navList}>
          {routes}
        </ul>
      </div>
    )
  }
}

export default NavBar
