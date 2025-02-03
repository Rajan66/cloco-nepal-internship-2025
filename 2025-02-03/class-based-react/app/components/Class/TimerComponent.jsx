"use client";
import { Component } from "react";

class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
    this.timerId = null; // initialize timerId properly
  }

  componentDidMount() {
    // start the timer when the component mounts
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // stop the timer when the component unmounts to prevent memory leaks
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <h1>Time: {this.state.time}</h1>
      </div>
    );
  }
}

export default TimerComponent;
