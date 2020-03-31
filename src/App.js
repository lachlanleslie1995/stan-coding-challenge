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
import Error from "./components/Error";
import { TitleProvider } from "./TitleContext";

const App = () => {
  return (
    <React.StrictMode>
      <TitleProvider>
        <div id="app">
          <header>
            <Header />
          </header>
          <div className="body">
            <Error>
              <Router>
                <HomePage path="/" />
                <Login path="/login" />
                <Trial path="/trial" />
                <Series path="/Series" />
                <Movies path="/Movies" />
              </Router>
            </Error>
          </div>
          <Footer />
        </div>
      </TitleProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
