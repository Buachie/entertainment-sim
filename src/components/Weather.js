//PARENT COMPONENENT OF STATS

import React, { Component } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import Stats from "./Stats";

export class Weather extends Component {
  constructor() {
    super();
    this.state = {
      long: -73.94998970249429,
      lat: 40.63292717413113,
      temp: null,
      place: null,
      weather: null,
      apparentTemp: null,
      icon: "",
    };
  }

  //Get user coordinates
  getLocation = () => {
    const success = (position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      //console.log(lat, long);
      this.setState({
        long: position.coords.longitude,
        lat: position.coords.latitude,
      });
    };

    const error = () => {
      console.log("Unable to retrieve your location");
    };

    navigator.geolocation.getCurrentPosition(success, error);
    setTimeout(() => {
      this.getLocation();
    }, 3000);
  };

  //Get weather info
  getWeather = () => {
    //Access api data
    const api = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/15abec103b4ca0854030b4462f9754ca/${this.state.lat},${this.state.long}`;
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => {
          console.log(data);
          const temp = data.currently.temperature;
          const place = data.timezone.replace(/_/g, " ");
          const weather = data.currently.summary;
          const apparentTemp =
            "(Feels like) " + data.currently.apparentTemperature;
          const icon = data.currently.icon;
          this.setState({ temp, place, weather, icon, apparentTemp });
        },
        setTimeout(() => {
          this.getWeather();
        }, 300000)
      );
  };
  componentDidMount() {
    this.getLocation();
    this.getWeather();
  }

  render() {
    let { temp, place, weather, icon, apparentTemp } = this.state;
    //Parameters for weather icon
    let defaults = {
      icon: icon.replace(/-/g, "_").toUpperCase(),
      color: "white",
      size: 150,
      animate: true,
    };

    return (
      <div>
        <div className="icon">
          <ReactAnimatedWeather
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
        </div>
        <div className="location-container">
          <div className="location">{place}</div>
        </div>
        <div className="weather-container">
          <div className="temp">{temp}&deg;</div>
          <div className="feels-like">{apparentTemp}</div>
          <div className="weather">{weather}</div>
        </div>
        <Stats weather={weather} />
      </div>
    );
  }
}

export default Weather;
