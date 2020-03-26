import React from "react";
import Tile from "./Tile";

const series = {
  title: "Popular Series",
  imageSource: "",
  url: "Series"
};

const movies = {
  title: "Popular Movies",
  imageSource: "",
  url: "Series"
};

const HomePage = () => {
  return (
    <div className="home-page">
      <Tile props={series} imageSource="" altText="Series" url="Series" />
      <Tile props={movies} altText="Movies" imageSource="" url="Movies" />
    </div>
  );
};

export default HomePage;
