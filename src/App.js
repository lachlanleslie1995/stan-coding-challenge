import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Trial from "./components/Trial";
import HomePage from "./components/HomePage";
import Series from "./components/Series";
import Movies from "./components/Movies";

const App = () => {
  return (
    <React.StrictMode>
      <div id="app">
        <header>
          <Header />
        </header>
        <div className="body">
          <Router>
            <HomePage path="/" />
            <Login path="/login" />
            <Trial path="/trial" />
            <Series path="/Series" />
            <Movies path="/Movies" />
          </Router>
        </div>
        <Footer />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
