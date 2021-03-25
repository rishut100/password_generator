import React, { Component } from "react";
import Nav from "./components/nav";
import Password from "./components/Password";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Password />
      </div>
    );
  }
}
