import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenuLinks extends Component {
  handleExit() {
    window.close();
  }

  render() {
    return (
      <div className="game-menu-links">
        <div className="game-specific">
          <Link to="/spaceblocks/play">
            <button>Start a new game</button>
          </Link>
          <Link to="/spaceblocks/scores">
            <button>High Score Table</button>
          </Link>
          <Link to="/spaceblocks/controls">
            <button>View Controls</button>
          </Link>
        </div>
        <button className="exit-game-button" onClick={this.handleExit}>
          Exit Game
        </button>
      </div>
    );
  }
}

export default MenuLinks;
