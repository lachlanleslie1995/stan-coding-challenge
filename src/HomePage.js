import React from "react";
import Tile from "./Tile";

const HomePage = () => {
  return (
    <div className="home-page">
      <Tile
        title="Popular Series"
        altText="Series"
        imageSource=""
        url="Series"
      />
      <Tile
        title="Popular Movies"
        altText="Movies"
        imageSource=""
        url="Movies"
      />
    </div>
  );
};

export default HomePage;
