import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "tachyons";
import "../App.css";
import App from './App';
import WorkInProgress from './WorkInProgress';

class Root extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route component={WorkInProgress} />
        </Switch>
      </Router>
    );
  }
}

export default Root;
