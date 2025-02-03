"use client";
import React, { Component } from "react";
import Button from "./Button";
import Link from "next/link";

class Counter extends Component {
  constructor() {
    super();
    this.state = { color: "red", count: 0 };
  }

  componentDidMount = () => {
    console.log(
      "I will run when the render is complete. I won't run when the counter is being updated."
    );
  };

  componentDidUpdate = () => {
    // runs after the component has been updated
    console.log("I will run when the counter has been updated");
  };

  componentWillUnmount = () => {
    // doesn't get destroyed immediately
    // wait for the other component to finish render, then after the page is ready
    // componentWillUnmout is called
    console.log("I will run when the component is getting destroyed");
  };

  // class member cant have const keyword
  // because methods inside a class aren't variables, they are properties of the object
  increaseCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log("update is called");
  };

  decreaseCount = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
    console.log("update is called");
  };

  changeColor = () => {
    this.setState((prevState) => ({
      color: prevState.color === "red" ? "blue" : "red",
    }));
  };

  render() {
    return (
      <div className="flex flex-col gap-5 m-5">
        <h1>Counter: {this.state.count}</h1>
        <h1>Color: {this.state.color}</h1>
        <Button label="Increase Count" onClick={this.increaseCount} />
        <Button label="Decrease Count" onClick={this.decreaseCount} />
        <Button label="Change color" onClick={this.changeColor} />
        <Link href="/home">
          <Button label="Go to home" />
        </Link>
      </div>
    );
  }
}
export default Counter;
