import React, { Component } from "react";
import Weather from "./Weather";
export class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intelligence: 5,
      strength: 5,
      charisma: 5,
      fun: 5,
      energy: 10,
      weather: "",
      icon: "",
      options: {
        clear: ["Go for a Run", "Go to the Museum", "Call a friend"],
        rain: ["Watch TV", "Read a Book", "Sleep"],
        cloudy: ["Go to the movies", "Work on vocabulary", "Play a game"],

        lightRain: ["Go hiking", "Study at the library", "Visit a friend"],
        mostlyCloudy: ["Do yoga at the park", "Meditate", "Go to a BBQ"],
        partlyCloudy: [
          "Do yoga at the park",
          "Create diagrams",
          "Visit an Aquarium",
        ],
      },
    };
  }

  activeOption = () => {
    this.setState({
      strength: this.state.strength + 2,
      intelligence: this.state.intelligence - 1,
      charisma: this.state.charisma + 1,
      energy: this.state.energy - 1,
    });
  };
  smartOption = () => {
    this.setState({
      strength: this.state.strength - 1,
      intelligence: this.state.intelligence + 3,
      charisma: this.state.charisma - 1,
      energy: this.state.energy - 1,
    });
  };
  charismaOption = () => {
    this.setState({
      strength: this.state.strength - 1,
      intelligence: this.state.intelligence + 1,
      charisma: this.state.charisma + 2,
      energy: this.state.energy - 1,
    });
  };

  //Option Buttons

  optionSelectOne = (e) => {
    switch (e) {
      case "Light Rain":
        return this.state.options.lightRain[0];
        break;
      case "Mostly Cloudy":
        return this.state.options.mostlyCloudy[0];
        break;
      case "Partly Cloudy":
        return this.state.options.partlyCloudy[0];
        break;
      case "Clear":
        return this.state.options.clear[0];
        break;
      case "Rain":
        return this.state.options.rain[0];
        break;
      case "Cloudy":
        return this.state.options.cloudy[0];
        break;
      default:
        break;
    }
  };
  optionSelectTwo = (e) => {
    switch (e) {
      case "Light Rain":
        return this.state.options.lightRain[1];
        break;
      case "Mostly Cloudy":
        return this.state.options.mostlyCloudy[1];
        break;
      case "Partly Cloudy":
        return this.state.options.partlyCloudy[1];
        break;
      case "Clear":
        return this.state.options.clear[1];
        break;
      case "Rain":
        return this.state.options.rain[1];
        break;
      case "Cloudy":
        return this.state.options.cloudy[1];
        break;
      default:
        break;
    }
  };
  optionSelectThree = (e) => {
    switch (e) {
      case "Light Rain":
        return this.state.options.lightRain[2];
        break;
      case "Mostly Cloudy":
        return this.state.options.mostlyCloudy[2];
        break;
      case "Partly Cloudy":
        return this.state.options.partlyCloudy[2];
        break;
      case "Clear":
        return this.state.options.clear[2];
        break;
      case "Rain":
        return this.state.options.rain[2];
        break;
      case "Cloudy":
        return this.state.options.cloudy[2];
        break;
      default:
        break;
    }
  };
  render() {
    let { intelligence, strength, charisma, options } = this.state;
    console.log(this.props);
    return (
      <div>
        <div className="option-container">
          <button className="option" onClick={this.activeOption}>
            {this.optionSelectOne(this.props.weather)}
          </button>
          <button className="option" onClick={this.smartOption}>
            {this.optionSelectTwo(this.props.weather)}
          </button>
          <button className="option" onClick={this.charismaOption}>
            {this.optionSelectThree(this.props.weather)}
          </button>
        </div>

        <div className="stats-container">
          <ul>
            <li>Strength:{strength}</li>
            <li>Intelligence:{intelligence}</li>
            <li>Charisma:{charisma}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Stats;
