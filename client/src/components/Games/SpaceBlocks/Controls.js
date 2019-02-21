import React from "react";
import { Link } from "react-router-dom";

const GameMenu = () => {
  return (
    <div className="control-screen">
      <h1>Space Blocks Attack!</h1>
      <ul>
        <li>
          Move left: <i>&larr;</i>
        </li>
        <li>
          Move Right: <i>&rarr;</i>
        </li>
        <li>
          Move Up: <i>&uarr;</i>
        </li>

        <li>
          Move Down: <i>&darr;</i>
        </li>
        <li>
          Fire: <i>SPACE</i>
        </li>
        <li>
          Charge: <i>SPACE</i> (Hold for rapid charge)
        </li>
        <li>
          Release Charge: <i>C</i>
        </li>
      </ul>
      <Link to="/spaceblocks">
        <button>Back to menu</button>
      </Link>
    </div>
  );
};

export default GameMenu;
