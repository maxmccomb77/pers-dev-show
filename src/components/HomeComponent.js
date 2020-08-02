import React, { Component } from "react";
import {
  Jumbotron,
  Button
} from "react-bootstrap";

class HomePage extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Welcome!</h1>
        <p>
          This is a personal showcase website that is written in Reactjs, utilizes Bootstrap libraries, and is hosted on an Amazon EC2 instance.
          Throughout this site you will find:

        </p>
        <ul>
            <li>A styled resum&eacute;</li>
            <li>Various programming examples including consulting work</li>
            <li>Details on this site's development and implementation</li>
            <li>Contact information</li>
            <li>An about me section</li>
        </ul>
        <p>         - Max McComb</p>
        <p>
          <Button href="https://github.com/maxmccomb77/pers-dev-show" target ="_blank" variant="primary">Check out the Git Repo for this Project</Button>
        </p>
      </Jumbotron>
    );
  }
}

export default HomePage;
