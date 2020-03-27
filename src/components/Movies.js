import React, { useEffect, useState, useContext } from "react";
import useFetch from "./UseFetch";
import Loading from "./Loading";
import Tile from "./Tile";
import { TitleContext } from "./TitleContext";

const Movies = () => {
  const [response, loading] = useFetch(
    "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
  );
  const [movies, setMovies] = useState([]);
  const context = useContext(TitleContext);

  useEffect(() => {
    context.setTitle("Popular Movies");
    setMovies(
      response.data.entries
        .sort((entryA, entryB) => {
          return entryA.title > entryB.title;
        })
        .filter(entry => {
          return entry.programType == "movie" && entry.releaseYear >= 2010;
        })
    );
  }, [response, context]);

  return (
    <div className="movies" data-testid="movies">
      {loading ? (
        <Loading />
      ) : (
        movies.map((entry, index) => {
          if (index < 21) {
            return (
              <Tile
                key={index}
                props={entry}
                imageSource={entry.images["Poster Art"].url}
                //   url="movies/:index"
              />
            );
          }
        })
      )}
    </div>
  );
};

export default Movies;
