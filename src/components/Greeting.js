import React, { Component } from "react";

export class Greeting extends Component {
  state = {
    date: new Date(),
    hour: null,
    username: "Aaron",
  };

  componentDidMount() {
    setInterval(() => {
      //this.getHour();
      this.setState({ date: new Date() });
    }, 1000); //Update interval
  }

  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    this.setState({ hour });
  };

  render() {
    const { hour, username, date } = this.state;

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
