import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";

const App = () => {
  return (
    <div className="app">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
    </div>
  );
};

export default App;

/*

function App() {
  return (
    <div>
      <Route exact path="/" component={<HomePage />} />
    </div>
  );
}

export default App;
*/
