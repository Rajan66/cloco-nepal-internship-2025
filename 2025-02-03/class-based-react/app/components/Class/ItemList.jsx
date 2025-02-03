"use client";
import { Component } from "react";
class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      item: "",
    };
  }

  addItem = () => {
    if (this.state.item.trim() === "") return; // Prevent empty items

    this.setState((prevState) => ({
      items: [...prevState.items, prevState.item], // Add new item to list
      item: "", // Clear input after adding
    }));
  };
  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };

  render() {
    return (
      <div className="text-black  bg-white">
        <input
          placeholder="Enter an item"
          value={this.state.item}
          onChange={this.handleChange}
        />
        <button onClick={this.addItem}>Add Item</button>
        <h1>Item List: </h1>

        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemList;
