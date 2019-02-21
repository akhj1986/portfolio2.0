import React from "react";
import { Link } from "react-router-dom";
import GameThumbnail from "../../../img/GameThumbnail.jpg";

const PortfolioLinks = () => {
  return (
    <div className="portfolio-links">
      <div className="game-link">
        <Link to="/spaceblocks" target="_blank">
          <img src={GameThumbnail} alt="Space Blocks Attack" />
        </Link>
        <p>Space Blocks Attack!</p>
      </div>
      <div className="repository-link">
        <a
          href="https://github.com/akhj1986?tab=repositories"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-git" />
        </a>{" "}
        <p>My repositories!</p>
      </div>
    </div>
  );
};

export default PortfolioLinks;
