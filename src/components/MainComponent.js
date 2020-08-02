import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Resume from "./ResumeComponent";
import { Container } from "react-bootstrap";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/resume" component={Resume} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;
