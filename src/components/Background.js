import React, { Component } from "react";

export class Background extends Component {
  constructor() {
    super();
    this.state = {
      imageURLS: [],
      pageURLS: [],
      users: [],
    };
  }

  getBackground = () => {
    const api =
      "https://pixabay.com/api/?key=14272018-277a44d4d1ae6e42f42ed7772&q=landscape&image_type=photo";
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let imageURLS = [];
        let pageURLS = [];
        let users = [];
        for (let i = 0; i < data.hits.length; i++) {
          imageURLS.push(data.hits[i].largeImageURL);
          pageURLS.push(data.hits[i].pageURL);
          users.push(data.hits[i].user);
        }
        this.setState({ imageURLS, pageURLS, users });
        console.log(this.state);
      });
  };

  backgroundRandomizer = (max) => {
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
      minHeight: "100%",
      position: "absolute",
      top: "0",
      left: "0",
      backgroundImage: `url(${this.backgroundRandomizer(
        this.state.imageURLS.length
      )})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div className="background" style={backgroundPhoto}>
        <div className="credits"></div>
      </div>
    );
  }
}

export default Background;
