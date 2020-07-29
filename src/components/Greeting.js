import React, { Component } from "react";

export class Greeting extends Component {
  userData;
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      hour: null,
      username: "",
    };
  }

  componentDidMount() {
    //Get username from local storage
    this.userData = JSON.parse(localStorage.getItem("user"));
    if (localStorage.getItem("user")) {
      this.setState({ username: this.userData });
    } else {
      let name = prompt("What is your name?");
      this.setState({ username: name });
    }
    //Start and refresh current time and date
    setInterval(() => {
      //this.getHour();
      this.setState({ date: new Date() });
    }, 1000); //Update interval
  }
  //Store name in local storage
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState.username));
  }

  getHour = () => {
    const date = new Date();
    const hour = date.getHours;
    this.setState({ hour });
  };
  componentDidMount(){
    this.getHour()
  }
  render() {
    const { hour, username, date } = this.state;
console.log(this.state)
    return (
      <div className="greeting-container">
        <h1 className="time-container">{date.toLocaleTimeString()}</h1>
        <h2 className="date-container">
          {date.toLocaleDateString("en-US", this.state.options)}
        </h2>
        <h2 className="greeting">
          {hour < 12 && date.toLocaleTimeString().includes("AM")
            ? `Good Morning ${username}`
            : hour < 5 && date.toLocaleTimeString().includes("PM")
            ? `Good Afternoon ${username}`
            : hour > 17 && date.toLocaleTimeString().includes("PM")
            ? `Good Evening ${username}`
            : `Good Evening ${username}`}
        </h2>
      </div>
    );
  }
}

export default Greeting;
