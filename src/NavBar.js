import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <div className="nav-bar" data-testid="nav-bar">
      <div className="nav-bar-left">
        <Link to="/" className="site-name">
          DEMO Streaming
        </Link>
      </div>
      <div className="nav-bar-right">
        <Link className="login-button" to="/login">
          Log in
        </Link>
        <Link className="trial-button" to="/trial">
          Start your free trial
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
