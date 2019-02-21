import React from "react";
import MenuLinks from "./MenuLinks";
import styles from "./gameMenu.module.scss";

const GameMenu = () => {
  return (
    <div className={styles.gameMenu}>
      <h1>Space Blocks Attack!</h1>
      <MenuLinks />
      <h2>A game by Alex Harris-Jedamski</h2>
    </div>
  );
};

export default GameMenu;
