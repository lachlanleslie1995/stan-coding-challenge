import React, { useContext, useEffect } from "react";
import Tile from "./Tile";
import { TitleContext } from "../TitleContext";

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
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle("Popular Titles");
  });
  return (
    <div className="home-page">
      <Tile props={series} imageSource="" altText="Series" url="Series" />
      <Tile props={movies} imageSource="" altText="Movies" url="Movies" />
    </div>
  );
};

export default HomePage;
