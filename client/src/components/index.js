import React from "react";

import Header from "./Header/";
import MainContent from "./Views/";
import Footer from "./Footer/";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Wrapper;
