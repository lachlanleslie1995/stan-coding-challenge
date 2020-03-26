import React from "react";
import { Link } from "@reach/router";

const Tile = ({ props, imageSource, altText, url }) => {
  return (
    <div className="tile" data-testid="tile">
      <Link to={"/" + url}>
        <div className="tile-img" data-testid="tile-img">
          <img
            src={
              imageSource ||
              "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/assets/placeholder.png"
            }
            alt={props.title}
          ></img>
          <div className="img-text" data-testid="img-text">
            {!imageSource ? altText : ""}
          </div>
        </div>
        <div className="tile-title" data-testid="tile-title">
          <p>{props.title}</p>
        </div>
      </Link>
    </div>
  );
};

export default Tile;
