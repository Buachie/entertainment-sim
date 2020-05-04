import React, { Component, useState } from "react";
const api = {
  key: "2a544f75ba1b3e40801266f71e8923a1",
  base: "https://api.openweathermap.org/data/2.5/",
};

export class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      long: null,
      lat: null,
    };
  }

  /*
  componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
  }
*/
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("latitude is :", position.coords.latitude);
      console.log("longitude is :", position.coords.longitude);
      const long = position.coords.longitude;
      const lat = position.coords.latitude;
      return long, lat;
    });
  }
  render() {
    return (
      <div>
        <div className="location-container">
          <div className="location">New York City, USA</div>
        </div>
        <div className="weather-container">
          <div className="temp">15c</div>
          <div className="weather">Sunny</div>
        </div>
      </div>
    );
  }
}

export default Weather;
