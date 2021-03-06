import React from "react"
import { Route, Switch } from "react-router-dom"
import styles from "./index.module.scss"

import Footer from "./components/Footer"
import Search from "./components/Search"
import CardDisplay from "./components/CardDisplay"

const MTGSearch = () => {
  return (
    <div className={styles.wrapper}>
      <Switch>
        <Route exact path="/mtgsearch" component={Search} />
        <Route path="/mtgsearch/:card_id" component={CardDisplay} />
      </Switch>
      <Footer />
    </div>
  )
}

export default MTGSearch
