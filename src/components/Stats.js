import React, { Component } from "react";
import { getNodeText } from "@testing-library/react";
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
        drizzle: [
          "Do some gardening",
          "Practice an instrument",
          "Go to an amusement park",
        ],
        overcast: ["Go to the gym", "Listen to classical music", "Volunteer"],
        humid: ["Go swimming at the pool", "Go to a book cafe", "Go camping with friends"]
      },
      displayButton: true,
    };
  }

  activeOption = () => {
    //Check if energy is less than 2
    if (this.state.energy < 2) {
      alert("You don't have enough energy! Rest a bit and try again later");
    } else {
      this.setState({
        strength: this.state.strength + 2,
        intelligence: this.state.intelligence - 1,
        charisma: this.state.charisma + 1,
        energy: this.state.energy - 2,
      });
      this.optionCooldown();
      this.optionReset();
    }
  };
  smartOption = () => {
    //Check if energy is less than or equal to 0
    if (this.state.energy <= 0) {
      alert("You don't have enough energy! Rest a bit and try again later");
    } else {
      this.setState({
        strength: this.state.strength - 1,
        intelligence: this.state.intelligence + 3,
        charisma: this.state.charisma - 1,
        energy: this.state.energy - 1,
      });
      this.optionCooldown();
      this.optionReset();
    }
  };
  charismaOption = () => {
    //Check if energy is less than 2
    if (this.state.energy < 2) {
      alert("You don't have enough energy! Rest a bit and try again later");
    } else {
      this.setState({
        strength: this.state.strength - 1,
        intelligence: this.state.intelligence + 1,
        charisma: this.state.charisma + 2,
        energy: this.state.energy - 2,
      });
      this.optionCooldown();
      this.optionReset();
    }
  };

  //Removes option selection after a button is clicked
  optionCooldown = () => {
    this.setState({ displayButton: false });
  };
  //Makes options reappear after the set time
  optionReset = () => {
    setTimeout(() => {
      this.setState({ displayButton: true });
    }, 30000);
  };
  //Restores Energy overtime
  restoreEnergy = () => {
    setTimeout(() => {
      this.state.energy < 10
        ? this.setState({ energy: this.state.energy + 1 })
        : console.log(this.state.energy);
      this.restoreEnergy();
    }, 20000);
  };

  //Button Options
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
      case "Drizzle":
        return this.state.options.drizzle[0];
        break;
      case "Overcast":
        return this.state.options.overcast[0];
        break;
      case "Humid":
        return this.state.options.humid[0];
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
      case "Drizzle":
        return this.state.options.drizzle[1];
        break;
      case "Overcast":
        return this.state.options.overcast[1];
        break;
      case "Humid":
        return this.state.options.humid[1];
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
      case "Drizzle":
        return this.state.options.drizzle[2];
        break;
      case "Overcast":
        return this.state.options.overcast[2];
        break;
      case "Humid":
        return this.state.options.humid[2];
        break;
      default:
        break;
    }
  };
  componentDidMount() {
    //this.optionReset();
    this.restoreEnergy();
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("strength", nextState.strength);
    localStorage.setItem("intelligence", nextState.intelligence);
    localStorage.setItem("charisma", nextState.charisma);
    localStorage.setItem("energy", nextState.energy);
    //localStorage.setItem("displayButton", nextState.displayButton);
  }
  //Retrieve Data from Local Storage
  componentWillMount() {
    localStorage.getItem(
      "strength",
      "intelligence",
      "charisma",
      "energy"
      //"displayButton"
    ) &&
      this.setState({
        strength: JSON.parse(localStorage.getItem("strength")),
        intelligence: JSON.parse(localStorage.getItem("intelligence")),
        charisma: JSON.parse(localStorage.getItem("charisma")),
        energy: JSON.parse(localStorage.getItem("energy")),
        //displayButton: JSON.parse(localStorage.getItem("displayButton")),
      });
  }
  render() {
    let { intelligence, strength, charisma, energy } = this.state;
    //console.log(this.props);

    return (
      <div className="option-stats">
        <h3>What would you like to do?</h3>
        <div
          className="option-container"
          style={{ display: `${this.state.displayButton ? "block" : "none"}` }}
        >
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
            <li>Energy:{energy}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Stats;
