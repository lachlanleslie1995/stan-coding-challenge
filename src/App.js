import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Trial from "./Trial";
import HomePage from "./HomePage";

const App = () => {
  return (
    <React.StrictMode>
      <div id="app">
        <header>
          <Header />
        </header>
        <div className="body">
          <Router>
            <Login path="/login" />
            <Trial path="/trial" />
            <HomePage path="/" />
            {/*<Series path="/Series" />
          <Movies path="/Movies" /> */}
          </Router>
        </div>
        <Footer />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
