import React from "react";
import largeHeadShot from "../../img/cropped-headshot2.jpg";

const RowContent = () => {
  return (
    <div className="row-content">
      <h1>About</h1>
      <div className="head-shot" id="large-screen-headshot">
        <img src={largeHeadShot} alt="problem loading: headshot" />
      </div>
    </div>
  );
};

export default RowContent;
