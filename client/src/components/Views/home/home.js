import React from "react";
import MediaQuery from "react-responsive";

import Photo from "./Photo";
import Phrases from "./Phrases";
import LearnMore from "./LearnMore";
import PhotoNav from "./PhotoNav";

const Home = () => {
  return (
    <div className="container home-container">
      <Phrases />
      <MediaQuery maxWidth={899}>
        {matches => {
          if (matches) {
            return <Photo />;
          } else {
            return <PhotoNav />;
          }
        }}
      </MediaQuery>

      <LearnMore />
    </div>
  );
};

export default Home;
