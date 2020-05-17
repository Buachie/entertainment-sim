import React, { Component } from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import Weather from "./components/Weather";
import Background from "./components/Background";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Background />
        <main>
          <div className="search-box">
            <input type="text" className="search-bar" placeholder="Search..." />
          </div>
          <div className="flex-container">
            <Greeting />
          </div>
          <Weather />
        </main>
      </div>
    );
  }
}
