import React from "react";
import { Link } from "react-router-dom";

import smallHeadShot from "../../../img/headshot3.jpg";

const PhotoNav = () => {
  return (
    <div className="photo-home-nav">
      <img src={smallHeadShot} alt="problem loading headshot" />
      <p>
        Alex Harris is a junior front-end developer transitioning from a career
        in teaching. <br />
        <Link className="learn-more-link-large" to="/skills">
          Learn More
        </Link>
      </p>
    </div>
  );
};

export default PhotoNav;
