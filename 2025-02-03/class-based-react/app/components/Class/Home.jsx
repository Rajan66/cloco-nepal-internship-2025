"use client";
import { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    console.log("I run before componentDidMount");
  }
  

  componentDidMount = () => {
    console.log("Home component mounted");
  };

  render() {
    return <div>Hi, counter component has been unmounted</div>;
  }
}


export default Home;