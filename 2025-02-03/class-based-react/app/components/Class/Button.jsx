import { Component } from "react";
class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="bg-white text-black p-4 max-w-[100px]"
      >
        {this.props.label}
      </button>
    );
  }
}

Button.defaultProps = {
  label: "My button",
};

export default Button;
