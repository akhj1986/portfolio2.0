import React from "react";
import { Link } from "react-router-dom";
import GameThumbnail from "../../../img/GameThumbnail.jpg";
import MtgThumbnail from "../../../img/mtg.png";
import styles from "./examplesLinks.module.scss";

const ExamplesLinks = () => {
  return (
    <div className={styles.examplesLinks}>
      <div className={styles.projectLink}>
        <Link to="/spaceblocks" target="_blank">
          <img src={GameThumbnail} alt="Space Blocks Attack" />
        </Link>
        <p>Space Blocks Attack!</p>
      </div>
      <div className={styles.projectLink}>
        <Link to="/mtgsearch" target="_blank">
          <img src={MtgThumbnail} alt="MTG search engine" />
        </Link>
        <p>MTG Search Engine</p>
      </div>
      <div className={styles.repositoryLink}>
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

export default ExamplesLinks;
