"use client";
import { Component } from "react";

class Greeting extends Component {
  constructor(props) {
    super(props);
  }

  getName = () => {
    const { firstname, lastname } = this.props;
    if (!lastname) {
      return firstname;
    }
    return `${firstname} ${lastname}`;
  };

  name = this.getName();

  render() {
    return (
      <div>
        <h1>Greetings: {this.name}</h1>
      </div>
    );
  }
}

Greeting.defaultProps = {
    lastname: "Bahadur"
}

export default Greeting;
