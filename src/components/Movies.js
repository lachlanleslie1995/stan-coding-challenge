import React, { useEffect, useState } from "react";
import useFetch from "./UseFetch";
import Loading from "./Loading";
import Tile from "./Tile";

const Movies = () => {
  const [response, loading] = useFetch(
    "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
  );
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(
      response.data.entries
        .sort((entryA, entryB) => {
          return entryA.title > entryB.title;
        })
        .filter(entry => {
          return entry.programType == "movie" && entry.releaseYear >= 2010;
        })
    );
  }, [response]);

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
