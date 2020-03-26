import React, { useEffect, useState } from "react";
import useFetch from "./UseFetch";
import Loading from "./Loading";
import Tile from "./Tile";

const Series = () => {
  const [response, loading] = useFetch(
    "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
  );
  const [series, setSeries] = useState([]);

  useEffect(() => {
    setSeries(
      response.data.entries
        .sort((entryA, entryB) => {
          return entryA.title > entryB.title;
        })
        .filter(entry => {
          return entry.programType == "series" && entry.releaseYear >= 2010;
        })
    );
  }, [response]);

  return (
    <div className="series" data-testid="series">
      {loading ? (
        <Loading />
      ) : (
        series.map((entry, index) => {
          if (index < 21) {
            return (
              <Tile
                key={index}
                props={entry}
                imageSource={entry.images["Poster Art"].url}
                //   url="series/:index"
              />
            );
          }
        })
      )}
    </div>
  );
};

export default Series;
