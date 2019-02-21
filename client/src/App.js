import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import SpaceBlocks from "./components/Games/SpaceBlocks/index.js";
import Wrapper from "./components";

const App = () => {
  return (
    <Router>
      <div id="app-container">
        <Switch>
          <Route path="/spaceblocks" component={SpaceBlocks} />
          <Route path="/" component={Wrapper} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
