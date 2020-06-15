import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import useFetch from "../Utils/UseFetch";

const MediaDetails = ({ title }) => {
  const [response, loading] = useFetch(
    "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
  );
  const [media, setMedia] = useState([]);
  useEffect(() => {
    setMedia(
      response.data.entries.filter(entry => {
        return entry.title == title;
      })
    );
  }, [response, title]);
  console.log(media);
  return (
    <div className="media-details" data-testid="media-details">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <img
            src={
              media[0].images["Poster Art"].url ||
              "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/assets/placeholder.png"
            }
            alt={media[0].title}
          ></img>
          <h1>{media[0].title}</h1>
          <p>{media[0].description}</p>
        </div>
      )}
      ;
    </div>
  );
};

export default MediaDetails;
