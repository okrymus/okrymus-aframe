import React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import App from "./components/App/App";
import NotFound from "./components/App/NotFound";

import Home from "./components/Home/Home";
import RealTime from "./components/RealTime/RealTime";
import HelloWorld from "./components/HelloWorld/HelloWorld";
import PeriodicTable from "./components/PeriodicTable/PeriodicTable";

import "./styles/styles.scss";

render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/helloworld" component={HelloWorld} />
        <Route path="/realtime" component={RealTime} />
        <Route path="/periodicTable" component={PeriodicTable} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("app")
);
