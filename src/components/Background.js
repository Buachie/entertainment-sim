import React, { Component } from "react";

export class Background extends Component {
  constructor() {
    super();
    this.state = {
      imageURLS: [],
    };
  }

  getBackground = () => {
    const api =
      "https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=14272018-277a44d4d1ae6e42f42ed7772&q=landscape&image_type=photo";
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let imageURLS = [];
        for (let i = 0; i < data.hits.length; i++) {
          imageURLS.push(data.hits[i].largeImageURL);
        }
        this.setState({ imageURLS });
        console.log(this.state);
      });
  };

  randomizer = (max) => {
    let index = Math.floor(Math.random() * Math.floor(max));
    return this.state.imageURLS[index];
  };
  componentDidMount() {
    this.getBackground();
  }

  render() {
    let backgroundPhoto = {
      zIndex: "-1",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: "0",
      left: "0",
      backgroundImage: `url(${this.randomizer(this.state.imageURLS.length)})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    };
    return <div className="background" style={backgroundPhoto}></div>;
  }
}

export default Background;
