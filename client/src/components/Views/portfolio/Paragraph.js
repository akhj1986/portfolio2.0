import React from "react";
import PortfolioLinks from "./PortfolioLinks";

const Paragraph = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <p className="paragraph">
        As a new developer who just stepped into the world of programming in
        October 2018, a portfolio is very much still in the works.
      </p>
      <p className="paragraph">
        But please check out my Git repositories and play a fun little space
        game I built (not touch screen compatible, sorry)!
      </p>
      <PortfolioLinks />
    </div>
  );
};

export default Paragraph;
