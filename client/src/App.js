import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import SpaceBlocks from "./components/Projects/SpaceBlocks/index.js";
import MTGSearch from "./components/Projects/MTGSearch";
import Wrapper from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div id="app-container">
        <Switch>
          <Route path="/spaceblocks" component={SpaceBlocks} />
          <Route path="/mtgsearch" component={MTGSearch} />
          <Route path="/" component={Wrapper} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
