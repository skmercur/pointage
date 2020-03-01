import React, { Component } from "react";
import "antd/dist/antd.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Pointage from "./components/Pointage";
import MapComponent from "./components/MapComponent";
export default class App extends Component {
  render() {
    return (
      <main>
        <HashRouter basename="/">
          <Route path="/" component={Pointage} exact />
          <Route path="/map" component={MapComponent} />
        </HashRouter>
      </main>
    );
  }
}
