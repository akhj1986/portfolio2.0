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
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(name) {
    this.setState(prevState => {
      const updatedState = prevState.routes.map(route => {
        route.active = route.routeName === name ? true : false
        return route
      })
      return {
        routes: updatedState
      }
    })
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
        handleClick={this.handleClick}
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
