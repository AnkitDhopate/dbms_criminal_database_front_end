import React from "react";
import Home from "./Home/Home";
import { Switch, Route } from "react-router-dom";
import Retrieve from "./Retrieve/Retrieve";
import Insert from "./Insert/Insert";
import "./App.css";

const App = () => {
  return (
    <div className="app_container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/retrieve" component={Retrieve} />
        <Route path="/insert" component={Insert} />
      </Switch>
    </div>
  );
};

export default App;
